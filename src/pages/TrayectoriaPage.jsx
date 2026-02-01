import './Trayectoria.css'
import { motion } from 'framer-motion'
import transition from '../components/transition'

const TrayectoriaPage = () => {
    return (
        <>
            <motion.div className="trayectoria"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
                <h2 className="trayectoria-title">
                    Trayectoria Profesional de la Dra. Lucrecia Ceja en Medicina Interna
                </h2>

                {/* <p className="trayectoria-text">
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
                </p> */}


                <p className="trayectoria-text">
                    Egresada de la <strong>Universidad Autónoma de Nuevo León</strong>, Especialidad en HRE No. 25 del IMSS, ha ocupado puestos clave en instituciones públicas del Sector Salud de Monterrey, entre ellos <strong>Jefa de Urgencias</strong>, <strong>Jefa Terapia Intensiva</strong> y <strong>Subdirectora Médica, H3.</strong>
                </p>

                <p className="trayectoria-text">
                    Colabora con varios laboratorios Medicos como Speaker.
                </p>

                <p className="trayectoria-text">
                    <strong>Certificaciones y Asociaciones Médicas</strong>
                </p>

                <p className="trayectoria-text">
                    Como internista se encuentra certificada por el Consejo Mexicano de Medicina Interna, y mantiene recertificación vigente, fue Presidenta del Colegio de Medicina Interna de Noreste, y actualmente participa activamente en este mismo colegio y es socia activa del Colegio de Medicos Cirujanos del Estado de Nuevo Leon.
                </p>

                <div className="logo-wrap">
                    <div className="img-wrap"><img src="/img/uni.png" alt="" /></div>
                    <div className="img-wrap"><img src="/img/interna.png" alt="" /></div>
                    <div className="img-wrap"><img src="/img/nuevoleon.png" alt="" /></div>
                    <div className="img-wrap"><img src="/img/noreste.png" alt="" /></div>

                </div>

            </motion.div>
        </>
    )

}

export default transition(TrayectoriaPage)