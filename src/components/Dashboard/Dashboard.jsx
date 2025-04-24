import { useState, useEffect } from 'react'
import { useAdminPostContext } from '../../contexts/AdminPostContext'
import { useAdminTagContext } from '../../contexts/AdminTagContext'

import { FaEdit, FaTrash } from 'react-icons/fa'
import './Dashboard.css'
import './DashboardForm.css'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('posts')
    const [showForm, setShowForm] = useState(false)

    const { posts, deletePost, createPost } = useAdminPostContext()
    const { tags, deleteTag } = useAdminTagContext()

    const publishedPosts = posts.filter(p => p.status === 'published')
    const draftPosts = posts.filter(p => p.status === 'draft')

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const [formData, setFormData] = useState({
        title: '',
        headline: '',
        reading_time: '',
        published_at: '',
        content: '',
        tags: '',
        image: null
    })

    const alphabet = "0123456789".split("");

    function FlipDigit({ target, delay }) {
        const [digit, setDigit] = useState(" ");
        const [done, setDone] = useState(false);


        useEffect(() => {
            if (done) return;

            let i = 0;
            const interval = setInterval(() => {
                const random = alphabet[Math.floor(Math.random() * alphabet.length)];
                setDigit(random);
                i++;
                if (i > 25) {
                    clearInterval(interval);
                    setDigit(target.toString());
                    setDone(true);
                }
            }, delay / 10);

            return () => clearInterval(interval);
        }, [target, delay, done]);

        return <span style={{ display: "inline-block" }}>{digit}</span>;
    }


    const handleChange = (e) => {
        const { name, value, type, files } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }))
    }

    const handleSubmit = async (publishNow = false) => {
        const data = new FormData()

        Object.entries(formData).forEach(([key, val]) => {
            if (key === 'tags') {
                data.append('tags', JSON.stringify(val.split(',').map(t => t.trim())))
            } else {
                data.append(key, val)
            }
        })

        data.append('is_published', publishNow ? '1' : '0')

        await createPost(data)
        setShowForm(false)
        setFormData({
            title: '',
            headline: '',
            reading_time: '',
            published_at: '',
            content: '',
            tags: '',
            image: null
        })
    }

    const confirmAndDelete = (postId, deletePost) => {
        const confirmed = window.confirm('Sei sicuro di voler eliminare questo post? Questa azione è irreversibile.');
        if (confirmed) {
            deletePost(postId);
        }
    };

    return (
        <motion.div
            className="dashboard"

            ref={ref}
            initial={{ opacity: 0, }}
            animate={isInView ? { opacity: 1, } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Sidebar */}
            <motion.aside
                className="sidebar"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1, ease: 'easeOut', type: "spring",
                    stiffness: 120,    // quanto è “dura” la molla
                    damping: 20,       // quanto smorza l’effetto di rimbalzo
                    mass: 1,           // più massa = più lento
                    bounce: 0.3,       // rimbalzo visibile
                    delay: 0.1
                }}
            >
                <h2>Panel de administración</h2>
                <ul>
                    <li onClick={() => setActiveTab('posts')}>📄 Publicados</li>
                    <li onClick={() => setActiveTab('drafts')}>📝 Borradores</li>
                    <li onClick={() => setActiveTab('tags')}>🏷️ Etiquetas</li>
                </ul>
            </motion.aside>

            {/* Main content */}
            <motion.div
                className="main-content"
                initial={{ opacity: 0, x: 1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1, ease: 'easeOut', type: "spring",
                    stiffness: 120,    // quanto è “dura” la molla
                    damping: 20,       // quanto smorza l’effetto di rimbalzo
                    mass: 1,           // più massa = più lento
                    bounce: 0.3,       // rimbalzo visibile
                    delay: 0.1
                }}
            >
                <div className="dashboard-header">

                    <div className="stat-box">
                        <div className="stat-box-num">
                            {publishedPosts.length.toString().split("").map((char, i) => (
                                <FlipDigit key={i} target={char} delay={300 + i * 20} />
                            ))}
                        </div>
                        <div>✅ Publicados</div>
                    </div>

                    <div className="stat-box">
                        <div className="stat-box-num">
                            {draftPosts.length.toString().split("").map((char, i) => (
                                <FlipDigit key={i} target={char} delay={300 + i * 20} />
                            ))}
                        </div>
                        <div>🕒 Borradores</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-box-num">
                            {tags.length.toString().split("").map((char, i) => (
                                <FlipDigit key={i} target={char} delay={300 + i * 20} />
                            ))}
                        </div>
                        <div>🏷️ Etiquetas</div>
                    </div>

                    <button className="create-post-btn" onClick={() => setShowForm(true)}>Crear nuevo post</button>
                </div>

                {showForm && (

                    <form className="post-form" onSubmit={(e) => e.preventDefault()}>

                        <div className='form-wrapper-title'>
                            <input type="text"
                                name="title"
                                placeholder="Título"
                                onChange={handleChange}
                                value={formData.title}
                                required />

                            <input type="text"
                                name="headline"
                                placeholder="Subtítulo"
                                onChange={handleChange}
                                value={formData.headline}
                                required />
                        </div>

                        <div className='form-wrapper-time'>
                            <input type="number"
                                name="reading_time"
                                placeholder="Tiempo de lectura (min)" onChange={handleChange}
                                value={formData.reading_time} />

                            <input type="date"
                                name="published_at"
                                onChange={handleChange}
                                value={formData.published_at} />

                        </div>

                        <textarea name="content"
                            placeholder="Contenido del post..."
                            onChange={handleChange}
                            value={formData.content} required />

                        <input type="text"
                            name="tags"
                            placeholder="Etiquetas separadas por coma" onChange={handleChange}
                            value={formData.tags} />



                        <div className="form-buttons">
                            <input type="file"
                                name="image"
                                onChange={handleChange} />

                            <button type="button"
                                onClick={() => handleSubmit(false)}>💾 Guardar como borrador</button>
                            <button type="button"
                                onClick={() => handleSubmit(true)}>🚀 Publicar ahora</button>
                            <button type="button"
                                onClick={() => setShowForm(false)}>Cancelar</button>
                        </div>
                    </form>
                )}

                <div className="dashboard-list">
                    {activeTab === 'posts' && (
                        <>
                            <h3>Publicados</h3>
                            {publishedPosts.map(post => (
                                <div className="list-row" key={post.id}>
                                    <span>{post.title}</span>
                                    <div className="actions">
                                        <FaEdit />
                                        <FaTrash onClick={() => confirmAndDelete(post.id, deletePost)} />
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
                                        <FaEdit />
                                        <FaTrash onClick={() => confirmAndDelete(post.id, deletePost)} />
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
                                        <FaEdit />
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
