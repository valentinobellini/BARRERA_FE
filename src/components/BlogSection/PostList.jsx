// import { useState, useEffect } from 'react'
// import './PostList.css'

// import Lottie from "lottie-react"
// import timer from "../../assets/Animations/timer.json"

// import { usePostContext } from '../../contexts/PostContext'

// // ✅ ALPHABET + FlipLetter per effetto “flip”
// const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -_".split("")

// function FlipLetter({ target, delay }) {
//   const [letter, setLetter] = useState(" ")
//   const [done, setDone] = useState(false)

//   useEffect(() => {
//     if (done) return

//     let i = 0
//     const interval = setInterval(() => {
//       const random = ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
//       setLetter(random)
//       i++
//       if (i > 10) {
//         clearInterval(interval)
//         setLetter(target)
//         setDone(true)
//       }
//     }, delay / 10)

//     return () => clearInterval(interval)
//   }, [target, delay, done])

//   return (
//     <span style={{ display: "inline-block", fontFamily: "monospace" }}>
//       {letter}
//     </span>
//   )
// }

// function FlipTag({ text }) {
//   return (
//     <span className="tag-badge" style={{ cursor: "pointer" }}>
//       {text.split("").map((char, i) => (
//         <FlipLetter key={i} target={char.toUpperCase()} delay={300 + i * 20} />
//       ))}
//     </span>
//   )
// }

// // ✅ COMPONENTE PRINCIPALE
// const PostList = ({ posts }) => {
//   console.log('📝 PostList - posts ricevuti:', posts)
//   const [expandedPostId, setExpandedPostId] = useState(null)
//   const { searchPosts } = usePostContext()

//   const togglePost = (id





// versione con slpit-flap display animation per Tags
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './PostList.css'

import Lottie from "lottie-react"
import timer from "../../assets/Animations/timer.json"

import { usePostContext } from '../../contexts/PostContext'

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

function FlipTag({ text }) {
  return (
    <span className="tag-badge" style={{ cursor: "pointer" }}>
      {text.split("").map((char, i) => (
        <FlipLetter key={i} target={char} delay={300 + i * 20} />
      ))}
    </span>
  )
}


// ✨ Varianti di animazione apertura post
const postDetailVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

// 📄 Componente principale
const PostList = ({ posts }) => {
  const [expandedPostId, setExpandedPostId] = useState(null)
  const { searchPosts } = usePostContext()

  const togglePost = (id) => {
    setExpandedPostId(prev => (prev === id ? null : id))
  }

  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No hay resultados para tu búsqueda.</p>
  }

  return (
    <div className="posts-container">
      {posts.map(post => (

        <motion.div
          key={post.id}
          className={`post-row ${expandedPostId === post.id ? 'expanded' : ''}`}
          onClick={() => togglePost(post.id)}
        >

          <h3 className="post-title">{post.title}</h3>
          <p className="post-headline">{post.headline}</p>

          <AnimatePresence mode="wait">
            {expandedPostId === post.id && (
              <motion.div
                layout
                key="details"
                className="post-details"
                variants={postDetailVariants}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1, type: 'spring' }}


              >
                <p className="post-content">{post.content}</p>

                <div className="lower-wrapper">


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
                            <FlipTag text={tag} />
                            {index < post.tags.length - 1 && ', '}
                          </span>
                        ))}
                      </>
                    )}
                  </p>

                  <p className="date">
                    {new Date(post.published_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="time-wrapper">
                  <Lottie
                    className="timer"
                    animationData={timer}
                    loop={false}
                    autoplay
                    speed={2}
                  />
                  <p className="time">
                    Tiempo de lectura: {post.reading_time} min
                  </p>
                </div>



              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}


export default PostList
