import { useNavigate } from 'react-router-dom'
import './PostList.css'
import { usePostContext } from '../../contexts/PostContext'

import PostCard from './PostCard'

// ✅ funzione per convertire il titolo in slug URL-friendly
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // rimuove caratteri speciali
    .trim()
    .replace(/\s+/g, '-')      // spazi → trattini
}


const PostList = ({ posts }) => {
  const { searchPosts } = usePostContext()
  const navigate = useNavigate()

  const handleClick = (post) => {
    const slug = slugify(post.title)
    navigate(`/blog/${post.id}/${slug}`)
  }

  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No hay resultados para tu búsqueda.</p>
  }

  return (
    <div className="posts-container">
      {posts.map((post) => {

        return <PostCard key={post.id} {...post} />
      })}
    </div>
  )
}

export default PostList


