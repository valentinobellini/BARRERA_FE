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
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>Médico Internista en Monterrey,<br />
                Especialista en Medicina Interna
            </motion.p>

            <div className="hero-image"><img alt="" /></div>

            <motion.p className="hero-text"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
                Con más de tres décadas de práctica clínica ininterrumpida, la Dra. Lucrecia Ceja Barrera se ha consolidado como un referente de la Medicina Interna en Monterrey, N.L. Su consulta se fundamenta en la prevención, el diagnóstico temprano y el tratamiento integral de patologías crónicas como diabetes, hipertensión arterial, dislipidemias y enfermedades autoinmunes, combinando protocolos basados en guías internacionales con un trato cercano, empático y absolutamente personalizado. A lo largo de estos 30 años, la doctora ha atendido a miles de pacientes, favoreciendo no solo su control metabólico, sino también su bienestar emocional y social, pilares indispensables para una mejor calidad de vida a corto y largo plazo.
            </motion.p>

            {/* <Link to={link} className="text-card-link">
                Leer más →
            </Link> */}

        </div>
    )
}

export default HeroSection
