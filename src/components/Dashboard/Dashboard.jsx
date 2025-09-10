import { useState, useEffect, useRef } from 'react'
import { useAdminPostContext } from '../../contexts/AdminPostContext'
import { useAdminTagContext } from '../../contexts/AdminTagContext'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import './Dashboard.css'
import './DashboardForm.css'
import { motion, useInView } from 'framer-motion'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('posts')
    const [showForm, setShowForm] = useState(false)
    const [formMode, setFormMode] = useState(null) // 'post' | 'tag'
    const [editingPost, setEditingPost] = useState(null)
    const [editingTag, setEditingTag] = useState(null)

    const { posts, deletePost, createPost, updatePost } = useAdminPostContext()
    const { tags, deleteTag, createTag, updateTag } = useAdminTagContext()


    // Filtri robusti: supporta sia status ('published'/'draft') sia is_published (1/0)
    const publishedPosts = posts.filter(p => (p?.status ? p.status === 'published' : Number(p?.is_published) === 1))
    const draftPosts = posts.filter(p => (p?.status ? p.status === 'draft' : Number(p?.is_published) === 0))

    // ---- FlipDigit: anima una sola volta quando arrivano i dati
    const didAnimate = useRef(false)
    const [animatedCounts, setAnimatedCounts] = useState({ published: null, drafts: null, tags: null })
    const [animateStats, setAnimateStats] = useState(true)

    useEffect(() => {
        if (!didAnimate.current && (posts.length || tags.length)) {
            setAnimatedCounts({
                published: publishedPosts.length,
                drafts: draftPosts.length,
                tags: tags.length
            })

            // lascia il tempo ai FlipDigit di completare (~1.2s)
            const t = setTimeout(() => {
                setAnimateStats(false)
                didAnimate.current = true
            }, 2000)

            return () => clearTimeout(t)
        }
    }, [posts, tags])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // ---- Form stati
    const initialPostForm = {
        title: '',
        headline: '',
        reading_time: '',
        published_at: '',
        content: '',
        tags: '',
        image: null
    }
    const [postForm, setPostForm] = useState(initialPostForm)
    const [tagForm, setTagForm] = useState({ name: '' })

    // ---- FlipDigit component (singolo render al mount)
    const DIGITS = '0123456789'.split('')
    function FlipDigit({ target, delay }) {
        const [digit, setDigit] = useState(' ')
        const [done, setDone] = useState(false)
        useEffect(() => {
            if (done) return
            let i = 0
            const it = setInterval(() => {
                const random = DIGITS[Math.floor(Math.random() * DIGITS.length)]
                setDigit(random)
                i++
                if (i > 25) {
                    clearInterval(it)
                    setDigit(target.toString())
                    setDone(true)
                }
            }, delay / 10)
            return () => clearInterval(it)
        }, [])
        return <span style={{ display: 'inline-block' }}>{digit}</span>
    }


    const closeForm = () => {
        setShowForm(false)
        setFormMode(null)
        setEditingPost(null)
        setEditingTag(null)
        setPostForm(initialPostForm)
        setTagForm({ name: '' })
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        // chiudi form se si cambia tab
        closeForm()
    }


    const openCreatePost = () => {
        setFormMode('post')
        setEditingPost(null)
        setPostForm(initialPostForm)
        setShowForm(true)
    }

    const openEditPost = (post) => {
        setFormMode('post')
        setEditingPost(post)
        setPostForm({
            title: post.title || '',
            headline: post.headline || '',
            reading_time: post.reading_time || '',
            published_at: post.published_at ? String(post.published_at).slice(0, 10) : '',
            content: post.content || '',
            tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
            image: null
        })
        setShowForm(true)
    }

    const onChangePostForm = (e) => {
        const { name, value, type, files } = e.target
        setPostForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }))
    }

    const submitPost = async (publishNow = false) => {
        const data = new FormData()
        Object.entries(postForm).forEach(([key, val]) => {
            if (key === 'tags') {
                const arr = val ? val.split(',').map(t => t.trim()).filter(Boolean) : []
                data.append('tags', JSON.stringify(arr))
            } else if (key === 'image') {
                if (val) data.append('image', val)
            } else {
                data.append(key, val ?? '')
            }
        })
        // Se editing: mantieni stato corrente se non pubblichi; se creazione: 0
        const currentPublished = editingPost ? String(editingPost.is_published ?? 0) : '0'
        data.append('is_published', publishNow ? '1' : currentPublished)

        if (editingPost) {
            await updatePost(editingPost.id, data)
        } else {
            await createPost(data)
        }
        closeForm()
    }

    const confirmAndDelete = (postId) => {
        const ok = window.confirm('Sei sicuro di voler eliminare questo post? Azione irreversibile.')
        if (ok) deletePost(postId)
    }


    const openCreateTag = () => {
        setFormMode('tag')
        setEditingTag(null)
        setTagForm({ name: '' })
        setShowForm(true)
    }

    const openEditTag = (tag) => {
        setFormMode('tag')
        setEditingTag(tag)
        setTagForm({ name: tag.name || '' })
        setShowForm(true)
    }

    const onChangeTagForm = (e) => {
        setTagForm({ name: e.target.value })
    }

    const submitTag = async () => {
        if (editingTag) {
            await updateTag(editingTag.id, tagForm.name)
        } else {
            await createTag(tagForm.name)
        }
        closeForm()
    }

    // Mostra "Guardar como borrador" solo per creazione o per post in bozza
    const isPostDraft = (post) => (post?.status ? post.status === 'draft' : Number(post?.is_published) === 0)
    const showSaveDraft = !editingPost || isPostDraft(editingPost)

    return (
        <motion.div
            className="dashboard"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Sidebar */}
            <motion.aside
                className="sidebar"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: 123, damping: 18, bounce: 0.3, delay: 0.1 }}
            >
                <h2>Panel de administración</h2>
                <ul>
                    <li onClick={() => handleTabChange('posts')}>Publicados</li>
                    <li onClick={() => handleTabChange('drafts')}>Borradores</li>
                    <li onClick={() => handleTabChange('tags')}>Etiquetas</li>
                </ul>
            </motion.aside>

            {/* Main content */}
            <motion.div
                className="main-content"
                initial={{ opacity: 0, x: 1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: 123, damping: 18, bounce: 0.3, delay: 0.1 }}
            >
                <div className="dashboard-header">


                    <div onClick={() => handleTabChange('posts')} className="stat-box">
                        <div className="stat-box-num">
                            {animateStats
                                ? animatedCounts.published?.toString().split('').map((c, i) => (
                                    <FlipDigit key={`p-${i}`} target={c} delay={300 + i * 20} />
                                ))
                                : publishedPosts.length}
                        </div>
                        <div>N. Publicados</div>
                    </div>



                    <div onClick={() => handleTabChange('drafts')} className="stat-box">
                        <div className="stat-box-num">
                            {animateStats
                                ? animatedCounts.drafts?.toString().split('').map((c, i) => (
                                    <FlipDigit key={`d-${i}`} target={c} delay={300 + i * 20} />
                                ))
                                : draftPosts.length}
                        </div>
                        <div>N. Borradores</div>
                    </div>



                    <div onClick={() => handleTabChange('tags')} className="stat-box">
                        <div className="stat-box-num">
                            {animateStats
                                ? animatedCounts.tags?.toString().split('').map((c, i) => (
                                    <FlipDigit key={`t-${i}`} target={c} delay={300 + i * 20} />
                                ))
                                : tags.length}
                        </div>
                        <div>N. Etiquetas</div>
                    </div>

                    {activeTab !== 'tags' ? (
                        <button className="create-post-btn" onClick={openCreatePost}>Crear nuevo post</button>
                    ) : (
                        <button className="create-post-btn" onClick={openCreateTag}>Crear etiqueta</button>
                    )}
                </div>

                {/* FORM AREA */}
                {showForm && formMode === 'post' && (
                    <form className="post-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-wrapper-title">
                            <input name="title" placeholder="Título" value={postForm.title} onChange={onChangePostForm} required />
                            <input name="headline" placeholder="Subtítulo" value={postForm.headline} onChange={onChangePostForm} required />
                        </div>

                        <div className="form-wrapper-time">
                            <input type="number" name="reading_time" placeholder="Tiempo de lectura (min)" value={postForm.reading_time} onChange={onChangePostForm} />
                            <input type="date" name="published_at" value={postForm.published_at} onChange={onChangePostForm} />
                        </div>

                        <textarea name="content" placeholder="Contenido del post..." value={postForm.content} onChange={onChangePostForm} required />
                        <input name="tags" placeholder="Etiquetas separadas por coma" value={postForm.tags} onChange={onChangePostForm} />

                        <div className="form-buttons">
                            <input type="file" name="image" onChange={onChangePostForm} />
                            {showSaveDraft && (
                                <button type="button" onClick={() => submitPost(false)}>Guardar como borrador</button>
                            )}
                            <button type="button" onClick={() => submitPost(true)}>Publicar ahora</button>
                            <button type="button" onClick={closeForm}>Cancelar</button>
                        </div>
                    </form>
                )}

                {showForm && formMode === 'tag' && (
                    <form className="post-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-wrapper-title">
                            <input name="name" placeholder="Nombre de la etiqueta" value={tagForm.name} onChange={onChangeTagForm} required />
                        </div>
                        <div className="form-buttons">
                            <button type="button" onClick={submitTag}>{editingTag ? 'Guardar cambios' : 'Crear etiqueta'}</button>
                            <button type="button" onClick={closeForm}>Cancelar</button>
                        </div>
                    </form>
                )}

                {/* LISTE */}
                <div className="dashboard-list">
                    {activeTab === 'posts' && (
                        <>
                            <h3>Publicados</h3>
                            {publishedPosts.map(post => (
                                <div className="list-row" key={post.id}>
                                    <span>{post.title}</span>
                                    <div className="actions">
                                        <FaEdit onClick={() => openEditPost(post)} />
                                        <FaTrash onClick={() => confirmAndDelete(post.id)} />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {activeTab === 'drafts' && (
                        <>
                            <h3>Borradores</h3>
                            {draftPosts.map(post => (
                                <div className="list-row" key={post.id}>
                                    <span>{post.title}</span>
                                    <div className="actions">
                                        <FaEdit onClick={() => openEditPost(post)} />
                                        <FaTrash onClick={() => confirmAndDelete(post.id)} />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {activeTab === 'tags' && (
                        <>
                            <h3>Etiquetas</h3>
                            {tags.map(tag => (
                                <div className="list-row" key={tag.id}>
                                    <span>{tag.name}</span>
                                    <div className="actions">
                                        <FaEdit onClick={() => openEditTag(tag)} />
                                        <FaTrash onClick={() => deleteTag(tag.id)} />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}
