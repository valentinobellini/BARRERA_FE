// import { Link } from 'react-router-dom'
import './HeroSection.css'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div className="hero">
            <motion.h3 className="hero-title"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>

                Dra. Lucrecia Ceja Barrera
            </motion.h3>
            <motion.p className="hero-head"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
                Médico Internista en Monterrey, <br />
                Especialista en Medicina Interna
            </motion.p>

            <div className="hero-image"><img alt="" /></div>

            <motion.p className="hero-text"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
                La Dra. Lucrecia Ceja Barrera es una especialista en Medicina Interna con más de 30 años de experiencia en Monterrey, N.L. Brindando atención integral, la Dra. Ceja se enfoca en el tratamiento de enfermedades crónicas como diabetes e hipertensión, con un compromiso hacia el bienestar y la calidad de vida de sus pacientes.
            </motion.p>

            {/* <Link to={link} className="text-card-link">
                Leer más →
            </Link> */}

        </div>
    )
}

export default HeroSection
