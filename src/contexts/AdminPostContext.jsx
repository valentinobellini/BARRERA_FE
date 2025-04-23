import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AdminPostContext = createContext()

export const AdminPostProvider = ({ children }) => {
    const [adminPosts, setAdminPosts] = useState([])

    // Recupera tutti i post admin
    const fetchAdminPosts = async () => {
        try {
            const res = await axios.get('/api/admin/posts')
            console.log('✅ Post admin ricevuti:', res.data) // <--- AGGIUNGI QUESTO
            setAdminPosts(res.data)
        } catch (err) {
            console.error('❌ Errore nel recupero dei post admin:', err)
        }
    }

    const createPost = async (formData) => {
        try {
            await axios.post('/api/admin/posts', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            fetchAdminPosts()
        } catch (err) {
            console.error('❌ Errore nella creazione del post:', err)
        }
    }

    const updatePost = async (id, formData) => {
        try {
            await axios.patch(`/api/admin/posts/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            fetchAdminPosts()
        } catch (err) {
            console.error('❌ Errore nell\'aggiornamento del post:', err)
        }
    }

    const deletePost = async (id) => {
        try {
            await axios.delete(`/api/admin/posts/${id}`)
            fetchAdminPosts()
        } catch (err) {
            console.error('❌ Errore nell\'eliminazione del post:', err)
        }
    }

    useEffect(() => {
        fetchAdminPosts()
    }, [])

    return (
        <AdminPostContext.Provider value={{
            posts: adminPosts,
            fetchAdminPosts,
            createPost,
            updatePost,
            deletePost
        }}>
            {children}
        </AdminPostContext.Provider>
    )
}

export const useAdminPostContext = () => useContext(AdminPostContext)
