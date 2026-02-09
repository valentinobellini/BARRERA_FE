


import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import './PostDetail.css'
import { normalizeTags } from '../../utils/normalizeTags'

export default function PostDetail() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const normalizedTags = normalizeTags(post?.tags)

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
        <motion.div className="post-detail">
            <h1>{post.title}</h1>
            <h2>{post.headline}</h2>

            {post.image_url && (
                <img
                    src={post.image_url}
                    alt={post.title}
                    className="detail-image"
                />
            )}

            <div className="meta-info">
                <span className="meta-item">
                    <FaRegCalendarAlt className="meta-icon" />
                    {new Date(post.published_at).toLocaleDateString()}
                </span>

                <span className="meta-item">
                    <FaRegClock className="meta-icon" />
                    {post.reading_time} min. de lectura
                </span>
            </div>

            <p className="content">{post.content}</p>

            <div className="post-detail-tags">
                {normalizedTags.length > 0 && (
                    <>
                        <span className="post-detail-tags-label">Etiquetas:</span>
                        {normalizedTags.map((tag, index) => (
                            <span key={`${tag}-${index}`} className="post-detail-tag">
                                {tag}
                            </span>
                        ))}
                    </>
                )}
            </div>
        </motion.div>
    )
}
