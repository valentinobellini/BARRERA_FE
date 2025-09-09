import { usePostContext } from '../contexts/PostContext'
import SearchBar from '../components/BlogSection/SearchBar'
import PostList from '../components/BlogSection/PostList'
import './Blog.css'
import transition from "../components/transition";

const BlogPage = () => {
    const { posts, filteredPosts, searchQuery } = usePostContext()

    const postsToShow = searchQuery.trim()
        ? (Array.isArray(filteredPosts) ? filteredPosts : [])
        : posts;

    return (
        <div className="blog-page">
            <h2 className='blog-title'>Reflexiones desde la consulta</h2>
            <p className='blog-text'>Temas relevantes que surgen en la práctica médica diaria.</p>
            <SearchBar />

            <div className="blog-wrapper">
                <PostList posts={postsToShow} />
            </div>
        </div>
    )
}

export default transition(BlogPage);