import { motion } from "framer-motion";
import transition from "../components/transition";
import "./AvisoDePrivacidad.css";

function AvisoDePrivacidadPage() {
    return (
        <motion.section
            className="aviso-page"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1, type: "spring" }}
        >
            <h1 className="aviso-title">Aviso de Privacidad</h1>

            <p className="aviso-intro">
                En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, se informa lo siguiente:
            </p>

            <h2 className="aviso-section-title">1. Responsable del tratamiento de los datos personales</h2>
            <p className="aviso-text">La responsable del tratamiento de sus datos personales es:</p>
            <p className="aviso-text">Dra. Lucrecia Ceja</p>
            <p className="aviso-text">Domicilio: Ruperto Martínez 1200, Centro, 64000 Monterrey, N.L., México</p>
            <p className="aviso-text">Teléfono: +52 81 8345 7777</p>

            <h2 className="aviso-section-title">2. Datos personales que se recaban</h2>
            <p className="aviso-text">
                Este sitio web es de carácter informativo y no recaba datos personales directamente a través de formularios ni sistemas de registro.
            </p>
            <p className="aviso-text">
                En caso de que el usuario decida contactar a la Dra. Lucrecia Ceja mediante el botón de WhatsApp disponible en el sitio u otros medios externos, los datos personales que proporcione voluntariamente (como nombre, número telefónico o información relacionada con su estado de salud) serán tratados conforme a la normativa aplicable y con estricta confidencialidad.
            </p>
            <p className="aviso-text">Los datos relacionados con la salud son considerados datos personales sensibles.</p>

            <h2 className="aviso-section-title">3. Finalidades del tratamiento</h2>
            <p className="aviso-text">
                Los datos personales proporcionados a través de medios externos (como WhatsApp) podrán ser utilizados para:
            </p>
            <ul className="aviso-list">
                <li>Atender solicitudes de información.</li>
                <li>Agendar citas médicas.</li>
                <li>Brindar orientación profesional.</li>
                <li>Dar seguimiento a consultas médicas.</li>
            </ul>
            <p className="aviso-text">No se utilizarán para finalidades distintas sin su consentimiento.</p>

            <h2 className="aviso-section-title">4. Transferencia de datos</h2>
            <p className="aviso-text">
                Sus datos personales no serán compartidos con terceros sin su consentimiento, salvo cuando sea requerido por autoridad competente o por disposición legal.
            </p>



            <h2 className="aviso-section-title">5. Uso de cookies y tecnologías de análisis</h2>
            <p className="aviso-text">
                Este sitio web utiliza Google Analytics, un servicio de análisis web proporcionado por Google LLC, que emplea cookies para recopilar información estadística sobre el uso del sitio, como páginas visitadas, tiempo de navegación y tipo de dispositivo.
            </p>
            <p className="aviso-text">
                La información recopilada es de carácter estadístico y no permite identificar personalmente al usuario.
            </p>

            <h2 className="aviso-section-title">6. Cambios al aviso de privacidad</h2>
            <p className="aviso-text">
                La responsable se reserva el derecho de efectuar modificaciones o actualizaciones al presente Aviso de Privacidad. Las modificaciones estarán disponibles en este mismo sitio web.
            </p>

            <p className="aviso-update">Fecha de última actualización: Febrero 2026</p>
        </motion.section>
    );
}

export default transition(AvisoDePrivacidadPage);

