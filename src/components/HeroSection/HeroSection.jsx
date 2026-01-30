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


            {/* <p className="hero-text">
                La Dra. Lucrecia Ceja Barrera es una especialista en Medicina Interna con más de 30 años de experiencia en Monterrey, N.L. Brindando atención integral, la Dra. Ceja se enfoca en el tratamiento de enfermedades crónicas como diabetes e hipertensión, con un compromiso hacia el bienestar y la calidad de vida de sus pacientes.
            </p> */}

            <div className="hero-wrap">
                <div className="hero-text-wrap">
                    <p className="hero-text">
                        Con más de <strong>tres décadas de práctica clínica ininterrumpida</strong>, la <strong>Dra. Lucrecia Ceja Barrera</strong> se ha consolidado como un referente de la <strong>Medicina Interna</strong> en <strong>Monterrey, N.L.</strong>
                    </p>

                    <p className="hero-text">
                        Su consulta se fundamenta en la prevención, el diagnóstico temprano y el tratamiento integral de patologías crónicas como <strong>diabetes</strong>, <strong>hipertensión arterial</strong>, <strong>dislipidemias (Elevación de las grasas)</strong>, <strong>enfermedades Tiroideas</strong>, etc, combinando protocolos basados en guías internacionales, con un trato cercano, empático y absolutamente personalizado.
                    </p>

                    <p className="hero-text">
                        A lo largo de estos 30 años, la doctora ha atendido a miles de pacientes, favoreciendo no solo su control metabólico, sino también su bienestar emocional y social, pilares indispensables para una <strong>mejor calidad de vida</strong> a corto y largo plazo.
                    </p>
                </div>


                {/* <div className="hero-image"><img src='img/doc1.jpeg' alt="" /></div> */}



            </div>




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
