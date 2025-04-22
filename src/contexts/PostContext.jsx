import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

// 1. Creazione del contesto
const PostContext = createContext()

// 2. Provider che avvolge i componenti figli
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])

    // Recupera tutti i post (chiamata iniziale)
    const fetchPosts = async () => {
        try {
            const res = await axios.get('/api/posts')

            setPosts(res.data)
            setFilteredPosts(res.data)
        } catch (err) {
            console.error('❌ Errore nel recupero dei post:', err)
        }
    }


    // Effettua una chiamata al backend per cercare i post
    const searchPosts = async (query) => {
        setSearchQuery(query)

        if (!query || query.trim() === '') {
            setFilteredPosts(posts)
            return
        }

        try {
            const res = await axios.get(`/api/posts/search?query=${encodeURIComponent(query)}`)

            if (Array.isArray(res.data)) {
                setFilteredPosts(res.data)
            } else {
                setFilteredPosts([])
            }
        } catch (err) {
            console.error('Errore durante la ricerca:', err)
            setFilteredPosts([])
        }
    }

    useEffect(() => {

        fetchPosts()
    }, [])

    useEffect(() => {
        console.log('📌 POSTS:', posts)
    }, [posts])

    return (
        <PostContext.Provider value={{
            posts,
            searchQuery,
            filteredPosts,
            setSearchQuery,
            searchPosts
        }}>
            {children}
        </PostContext.Provider>
    )
}

// 3. Hook personalizzato per usare il contesto
export const usePostContext = () => useContext(PostContext)
