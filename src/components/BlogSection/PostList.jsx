
// versione con postdetail

import { useNavigate } from 'react-router-dom'
import './PostList.css'
import { usePostContext } from '../../contexts/PostContext'
import { useState, useEffect } from 'react'

// ✅ alphabet + FlipLetter per effetto “flip”
const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789 -_".split("")

function FlipLetter({ target, delay }) {
  const [letter, setLetter] = useState(" ")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return

    let i = 0
    const interval = setInterval(() => {
      const random = alphabet[Math.floor(Math.random() * alphabet.length)]
      setLetter(random)
      i++
      if (i > 15) {
        clearInterval(interval)
        setLetter(target)
        setDone(true)
      }
    }, delay / 10)

    return () => clearInterval(interval)
  }, [target, delay, done])

  return (
    <span style={{ display: "inline-block" }}>
      {letter}
    </span>
  )
}

// function FlipTag({ text }) {
//   return (
//     <span className="tag-badge" style={{ cursor: "pointer" }}>
//       {text.split("").map((char, i) => (
//         <FlipLetter key={i} target={char} delay={300 + i * 20} />
//       ))}
//     </span>
//   )
// }

// ✅ funzione per convertire il titolo in slug URL-friendly
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // rimuove caratteri speciali
    .trim()
    .replace(/\s+/g, '-')      // spazi → trattini
}

// 📄 Componente principale
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
      {posts.map(post => (
        <div
          key={post.id}
          className="post-row"
          onClick={() => handleClick(post)}
        >
          {post.image_url ?
            <div className='post-thumb'>
              <img src={post.image_url} alt="" />
            </div> :
            null}


          {/* <div className='post-img-container'>
            <img src={post.image_url} alt="" />
          </div> */}
          <h3 className="post-title">{post.title}</h3>
          <p className="post-headline">{post.headline}</p>

          <p className="tags">
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
          </p>

          <p className="date">
            {new Date(post.published_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PostList


