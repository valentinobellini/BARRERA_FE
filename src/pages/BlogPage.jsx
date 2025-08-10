import { usePostContext } from '../contexts/PostContext'
import SearchBar from '../components/BlogSection/SearchBar'
import PostList from '../components/BlogSection/PostList'

const BlogPage = () => {
    const { posts, filteredPosts, searchQuery } = usePostContext()

    const postsToShow = searchQuery.trim()
        ? (Array.isArray(filteredPosts) ? filteredPosts : [])
        : posts;

    return (
        <div className="blog-page">
            <SearchBar />

            <div className="blog-wrapper">
                <PostList posts={postsToShow} />
            </div>
        </div>
    )
}

export default BlogPage
