import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout
import MainLayout from './layouts/MainLayout'

// Context
import { PostProvider } from './contexts/PostContext'
import { AdminPostProvider } from './contexts/AdminPostContext'
import { AdminTagProvider } from './contexts/AdminTagContext'

// Pagine
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import PorQueElegirmePage from './pages/PorQueElegirmePage'
import TrayectoriaPage from './pages/TrayectoriaPage'
import ContactosPage from './pages/ContactosPage'
import BlogPage from './pages/BlogPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>

          {/* Layout pubblico */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="servicios" element={<ServiciosPage />} />
            <Route path="por-que-elegirme" element={<PorQueElegirmePage />} />
            <Route path="trayectoria-profesional" element={<TrayectoriaPage />} />
            <Route path="contactos" element={<ContactosPage />} />
            <Route path="blog" element={<BlogPage />} />

            {/* Admin */}
            <Route path="/admin" element={
              <AdminPostProvider>
                <AdminTagProvider>
                  <AdminPage />
                </AdminTagProvider>
              </AdminPostProvider>
            } />


            {/* Rotta di fallback (404) */}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Route>



        </Routes>
      </BrowserRouter>
    </PostProvider>
  )
}

export default App
