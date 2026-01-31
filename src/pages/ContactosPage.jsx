import './Contactos.css'
import { motion } from 'framer-motion'
import transition from '../components/transition'

const ContactosPage = () => {
    return (

        <motion.section className="contacto"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}>


            {/* <h2 className="contacto-title">
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
            </p> */}




            <h2 className="contacto-title">
                Contacta a la Dra. Lucrecia Ceja <br /> Agenda tu Consulta de Medicina Interna en Monterrey
            </h2>

            <p className="contacto-text">
                Da el primer paso hacia una atención médica integral y personalizada. Agenda tu
                cita llamando al (81) 11 58 90 03 o enviando un correo a <a href="mailto:consulmedicinainterna@gmail.com">
                    consulmedicinainterna@gmail.com
                </a>.
            </p>
            <p className="contacto-text">
                También puedes solicitar una <strong>videoconsulta</strong> si resides fuera del
                área metropolitana. <br /> La Dra. Ceja y su equipo te ofrecerán un servicio ágil, seguro
                y confidencial, y seguimiento continuo para que alcances tus objetivos de salud sin
                barreras.
                <br />
                <br />
                ¡Recupera tu bienestar con la experiencia de una internista líder en
                Monterrey!
            </p>



            <div className="contact-button-wrapper">
                <button
                    className="cta-button contact-button"
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
            </div>






            {/* MAPPA */}
            <div className="contact-map">
                {/* <h3 className="contacto-map-title">Cómo llegar</h3> */}

                <div className="map-embed">
                    <iframe
                        title="Mapa - Consultorio Dra. Lucrecia Ceja"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4276.11730741765!2d-100.32766182186184!3d25.678861153499327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662954a5f65df39%3A0x81622b58f0d28e89!2sDra.%20Lucrecia%20Ceja%20Barrera%2C%20Internista!5e0!3m2!1sen!2sar!4v1769801960337!5m2!1sen!2sar"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* <p className="contacto-map-address">
                    <strong>Dirección:</strong> Ruperto Martínez 1200, Centro, 64000 Monterrey, N.L., Mexico
                </p> */}
            </div>


        </motion.section>


    )

}

export default transition(ContactosPage)