import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AdminTagContext = createContext()

export const AdminTagProvider = ({ children }) => {
    const [adminTags, setAdminTags] = useState([])

    const fetchAdminTags = async () => {
        try {
            const res = await axios.get('/api/admin/tags')
            setAdminTags(res.data)
        } catch (err) {
            console.error('❌ Errore nel recupero dei tag admin:', err)
        }
    }

    const createTag = async (name) => {
        try {
            await axios.post('/api/admin/tags', { name })
            fetchAdminTags()
        } catch (err) {
            console.error('❌ Errore nella creazione del tag:', err)
        }
    }

    const updateTag = async (id, name) => {
        try {
            await axios.patch(`/api/admin/tags/${id}`, { name })
            fetchAdminTags()
        } catch (err) {
            console.error('❌ Errore nell\'aggiornamento del tag:', err)
        }
    }

    const deleteTag = async (id) => {
        try {
            await axios.delete(`/api/admin/tags/${id}`)
            fetchAdminTags()
        } catch (err) {
            console.error('❌ Errore nell\'eliminazione del tag:', err)
        }
    }

    useEffect(() => {
        fetchAdminTags()
    }, [])

    return (
        <AdminTagContext.Provider value={{
            tags: adminTags,
            fetchAdminTags,
            createTag,
            updateTag,
            deleteTag
        }}>
            {children}
        </AdminTagContext.Provider>
    )
}

export const useAdminTagContext = () => useContext(AdminTagContext)
