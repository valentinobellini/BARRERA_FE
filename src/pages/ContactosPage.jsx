import './Contactos.css'
import { motion } from 'framer-motion'
import transition from '../components/transition'

const ContactosPage = () => {
    return (

        <motion.section className="contacto"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>
            <h2 className="contacto-title">
                Contacta a la Dra. Lucrecia Ceja <br />
                Agenda tu Consulta de Medicina Interna en Monterrey
            </h2>

            <p className="contacto-text">
                Da el primer paso hacia una atención médica integral y personalizada. Agenda
                tu cita llamando al <strong>(81) 1234-5678</strong> o enviando un correo a{" "}
                <a href="mailto:contacto@dralucreciaceja.com">
                    contacto@dralucreciaceja.com
                </a>
                <br />
                <br />
                También puedes solicitar una videoconsulta si resides fuera del área
                metropolitana. La Dra. Ceja y su equipo te ofrecerán un servicio ágil,
                seguro y confidencial, con opciones de pago flexibles y seguimiento continuo
                para que alcances tus objetivos de salud sin barreras.
                <br />
                <br />
                ¡Recupera tu
                bienestar con la experiencia de una internista líder en Monterrey!
            </p>
        </motion.section>


    )

}

export default transition(ContactosPage)