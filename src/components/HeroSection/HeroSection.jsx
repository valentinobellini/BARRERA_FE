// import { Link } from 'react-router-dom'
import './HeroSection.css'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <motion.div className="hero"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
            <h1 className="hero-title"
            >
                Dra. Lucrecia Ceja Barrera
            </h1>
            <p className="hero-head">Médico Internista en Monterrey,<br />
                Especialista en Medicina Interna
            </p>

            <div className="hero-image"><img alt="" /></div>

            <p className="hero-text">
                La Dra. Lucrecia Ceja Barrera es una especialista en Medicina Interna con más de 30 años de experiencia en Monterrey, N.L. Brindando atención integral, la Dra. Ceja se enfoca en el tratamiento de enfermedades crónicas como diabetes e hipertensión, con un compromiso hacia el bienestar y la calidad de vida de sus pacientes.
            </p>

            <button
                className="cta-button"
                onClick={() =>
                    window.open(
                        "https://wa.me/393286886891?text=Ciao%2C%20vorrei%20più%20info",
                        "_blank",
                        "noopener,noreferrer"
                    )
                }
            >
                Agenda tu cita
            </button>
        </motion.div>
    )
}

export default HeroSection
