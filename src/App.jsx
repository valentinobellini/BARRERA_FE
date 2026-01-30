import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

// Layout
import MainLayout from './layouts/MainLayout'

// Context
import { PostProvider } from './contexts/PostContext'

// Pagine
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import PorQueElegirmePage from './pages/PorQueElegirmePage'
import TrayectoriaPage from './pages/TrayectoriaPage'
import ContactosPage from './pages/ContactosPage'
import BlogPage from './pages/BlogPage'

import PostDetail from './components/BlogSection/PostDetail'
import AdminScreen from "./pages/AdminScreen";

import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/Auth/ProtectedRoute";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="por-que-elegirme" element={<PorQueElegirmePage />} />
          <Route path="trayectoria-profesional" element={<TrayectoriaPage />} />
          <Route path="contactos" element={<ContactosPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id/:slug" element={<PostDetail />} />


          {/* Login libero */}
          <Route path="login" element={<LoginPage />} />


          {/* Admin protetta */}
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminScreen />
              </ProtectedRoute>
            }
          />



          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </PostProvider>
  );
}