import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PostDetail.css'

const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789 -_".split("")

// function FlipLetter({ target, delay }) {
//     const [letter, setLetter] = useState(" ")
//     const [done, setDone] = useState(false)

//     useEffect(() => {
//         if (done) return
//         let i = 0
//         const interval = setInterval(() => {
//             const random = alphabet[Math.floor(Math.random() * alphabet.length)]
//             setLetter(random)
//             i++
//             if (i > 15) {
//                 clearInterval(interval)
//                 setLetter(target)
//                 setDone(true)
//             }
//         }, delay / 10)

//         return () => clearInterval(interval)
//     }, [target, delay, done])

//     return <span style={{ display: "inline-block" }}>{letter}</span>
// }

// function FlipTag({ text }) {
//     return (
//         <span className="tag-badge">
//             {text.split("").map((char, i) => (
//                 <FlipLetter key={i} target={char} delay={300 + i * 20} />
//             ))}
//         </span>
//     )
// }

export default function PostDetail() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/${id}`)
                if (!res.ok) throw new Error('Post not found')
                const data = await res.json()
                setPost(data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchPost()
    }, [id])

    if (error) return <p>{error}</p>
    if (!post) return <p>Cargando post...</p>

    return (
        <motion.div
            className="post-detail"
        // initial={{ opacity: 0, y: 40, x: 40 }}
        // animate={{ opacity: 1, y: 0, x: 0 }}
        // transition={{ duration: 0.5 }}
        >
            <h1>{post.title}</h1>
            <h2>{post.headline}</h2>

            {post.image_url && (
                <img src={post.image_url} alt={post.title} className="detail-image" />
            )}

            <div className="meta-info">
                <p>📅 {new Date(post.published_at).toLocaleDateString()}</p>
                <p>🕒 {post.reading_time} min de lectura</p>
            </div>

            <p className="content">{post.content}</p>

            <div className="tags">
                {Array.isArray(post.tags) && post.tags.length > 0 && (
                    <>
                        <span className="tags-label">Etiquetas:</span>{" "}
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    searchPosts(tag)
                                }}
                            >
                                <span className='tag'>
                                    {tag}
                                    {index < post.tags.length - 1 && ', '}
                                </span>
                            </span>
                        ))}
                    </>
                )}
            </div>
        </motion.div>
    )
}
