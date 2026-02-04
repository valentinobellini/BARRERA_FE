import { FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion'
import './PorQueElegirme.css'
import transition from "../components/transition";

const PorQueElegirmePage = () => {
    return (
        <motion.section className="porque-elegirme"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
            <h2 className="porque-elegirme-title">
                Por qué Elegir a la Dra. Lucrecia Ceja <br /> como tu Médico Internista en Monterrey
            </h2>


            {/* <ul className="porque-elegirme-list">
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
            </ul> */}




            <section class="porque-elegirme-content">

                <p>
                    Cuando se trata de tu salud, elegir al especialista adecuado marca toda la diferencia.
                    Con más de dos décadas de práctica, formación de alto nivel y el respaldo de cientos
                    de pacientes satisfechos, la Dra. Lucrecia Ceja Barrera se posiciona como una de las
                    internistas más reconocidas de Monterrey. A continuación encontrarás los motivos
                    concretos que la convierten en la mejor elección para el cuidado integral de adultos.
                </p>

                <h2>Trayectoria clínica sólida</h2>
                <ul>
                    <li>Más de 20 años de experiencia clínica continua atendiendo enfermedades crónicas y agudas.</li>
                    <li>Ex-Jefa de la Unidad de Terapia Intensiva del HGZ N.º 6 del IMSS.</li>
                    <li>Consulta privada en el Hospital San Vicente, Centro de Monterrey.</li>
                </ul>

                <h2>Credenciales y liderazgo profesional</h2>
                <ul>
                    <li>Cédula profesional 1119149 y especialidad en Medicina Interna (IMSS-Monterrey).</li>
                    <li>Expresidenta del Colegio de Medicina Interna del Noreste y actual secretaria de Comunicación Social de COMINE.</li>
                    <li>Miembro activo del Colegio de Médicos Cirujanos de Nuevo León.</li>
                </ul>

                <h2>Confianza avalada por los pacientes</h2>
                <ul>
                    <li>215 opiniones verificadas, todas positivas (5 ★) en Doctoralia.</li>
                    <li>Certificado de Excelencia basado en valoraciones reales.</li>
                </ul>

                <h2>Tecnología y enfoque integral</h2>
                <ul>
                    <li>Monitoreo remoto de glucosa (CGM), MAPA 24 h y teleconsulta segura.</li>
                    <li>Planes personalizados que integran nutrición clínica, ejercicio y farmacoterapia de última generación.</li>
                </ul>

                <h2>Investigación y actualización continua</h2>
                <ul>
                    <li>Autora colaboradora en la revista Medicina Interna de México sobre tendencias en diabetes tipo 2.</li>
                    <li>Asistencia anual a congresos nacionales e internacionales para aplicar las guías más recientes.</li>
                </ul>

                <h2>Atención centrada en el paciente</h2>
                <ul>
                    <li>Consultas de 40 minutos en promedio, lenguaje claro y seguimiento por WhatsApp médico.</li>
                    <li>Educación al paciente y a su familia para la autogestión de la enfermedad.</li>
                    <li>Protocolos de bioseguridad estrictos: ventilación, desinfección y distanciamiento.</li>
                </ul>

                <h2>Ubicación y accesibilidad</h2>
                <ul>
                    <li>Consultorio en Ruperto Martínez #1200, Zona Centro, Monterrey, con fácil acceso y estacionamientos cercanos.</li>
                    <li>Videoconsulta disponible para pacientes fuera del área metropolitana o con movilidad reducida.</li>
                </ul>

            </section>

        </motion.section>
    )
}

export default transition(PorQueElegirmePage);