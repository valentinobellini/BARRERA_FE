import { usePostContext } from '../contexts/PostContext'
import SearchBar from '../components/BlogSection/SearchBar'
import PostList from '../components/BlogSection/PostList'
import './Blog.css'
import transition from "../components/transition";
import { motion } from "framer-motion"

const BlogPage = () => {
    const { posts, filteredPosts, searchQuery } = usePostContext()

    const postsToShow = searchQuery.trim()
        ? (Array.isArray(filteredPosts) ? filteredPosts : [])
        : posts;

    return (
        <motion.div className="blog-page"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
            <h2 className='blog-title'>Reflexiones desde la consulta</h2>
            <p className='blog-text'>Temas relevantes que surgen en la práctica médica diaria.</p>
            <SearchBar />

            <div className="blog-wrapper">
                <PostList posts={postsToShow} />
            </div>
        </motion.div>
    )
}

export default transition(BlogPage);