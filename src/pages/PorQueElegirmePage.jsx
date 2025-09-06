import { FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion'
import './PorQueElegirme.css'

const PorQueElegirmePage = () => {
    return (
        <motion.section className="porque-elegirme"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
            <h2 className="porque-elegirme-title">
                Por qué Elegir a la Dra. Lucrecia Ceja <br /> como tu Médico Internista en Monterrey
            </h2>

            <ul className="porque-elegirme-list">
                <li>
                    <FaCheck className="check-icon" />
                    <p>
                        <strong>Experiencia comprobada:</strong> 30+ años, más de 12 000 historias clínicas.
                    </p>
                </li>
                <li>
                    <FaCheck className="check-icon" />
                    <p>
                        <strong>Formación de excelencia:</strong> Residencia en Medicina Interna UANL; estancias en Cleveland Clinic y Houston Methodist.
                    </p>
                </li>
                <li>
                    <FaCheck className="check-icon" />
                    <p>
                        <strong>Tecnología y ciencia:</strong> Equipos de diagnóstico de última generación, protocolos actualizados cada seis meses.
                    </p>
                </li>
                <li>
                    <FaCheck className="check-icon" />
                    <p>
                        <strong>Cercanía y confianza:</strong> Tiempo de consulta extendido y comunicación directa vía WhatsApp médico para dudas urgentes.
                    </p>
                </li>
                <li>
                    <FaCheck className="check-icon" />
                    <p>
                        <strong>Resultados medibles:</strong> Indicadores de control (HbA1c, PAM, perfil lipídico) auditados trimestralmente.
                    </p>
                </li>
            </ul>
        </motion.section>
    )
}

export default PorQueElegirmePage