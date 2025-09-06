import './Trayectoria.css'
import { motion } from 'framer-motion'


const TrayectoriaPage = () => {
    return (
        <>
            <motion.div className="trayectoria"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
                <h2 className="trayectoria-title">
                    Trayectoria Profesional de la Dra. <br />
                    Lucrecia Ceja en Medicina Interna
                </h2>

                <p className="trayectoria-text">
                    Egresada con honores de la Universidad Autónoma de Nuevo León, la Dra. Ceja
                    ha ocupado puestos clave en instituciones públicas y privadas de Monterrey,
                    entre ellos Jefa de Terapia Intensiva en el Hospital Universitario Dr. José
                    E. González y Subdirectora Médica en el Hospital Christus Muguerza Alta
                    Especialidad.
                </p>

                <p className="trayectoria-text">
                    Ha sido ponente en más de 40 congresos nacionales e internacionales, autora
                    de artículos indexados en Scopus y coordinadora de protocolos de
                    investigación sobre resistencia a la insulina y enfermedades infecciosas
                    emergentes. Su liderazgo le valió el Premio Estatal de Salud 2023 en la
                    categoría de Medicina Clínica.
                </p>
            </motion.div>
        </>
    )

}

export default TrayectoriaPage