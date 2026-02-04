import HeroSection from '../components/HeroSection/HeroSection'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import ReviewsCarousel from '../components/Reviews/ReviewsCarousel'
import transition from '../components/transition'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HomePage = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div className="homepage">

            {/* HERO */}
            <section>
                <HeroSection></HeroSection>
            </section>



            {/* SERVICIOS */}
            <section className='services'>
                <motion.div className="services-wrapper"
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>

                    <h2>Servicios de Medicina Interna Especializada en Monterrey</h2>
                    <div className="services-card-wrapper">
                        <ServiceCard
                            image='/img/diabetes.png'
                            title='Tratamiento Integral para Diabetes'
                            text='La Dra. Ceja ofrece un enfoque integral para el manejo de la diabetes, enfocado en la prevención de complicaciones y la mejora de la calidad de vida mediante educación y monitoreo.'
                        ></ServiceCard>

                        <ServiceCard
                            image='/img/ipertension.png'

                            title='Control de Hipertensión Arterial'
                            text='Con una estrategia de diagnóstico y control de la presión arterial, la Dra. Ceja ayuda a prevenir enfermedades cardiovasculares y a mejorar la salud de sus pacientes.'
                        ></ServiceCard>

                        <ServiceCard
                            image='/img/general.png'

                            title='Medicina Interna General para Adultos'
                            text='La Dra. Ceja aborda desde enfermedades agudas hasta el manejo de condiciones complejas, brindando un enfoque integral en la salud del adulto moderno.'
                        ></ServiceCard>
                    </div>
                </motion.div>
            </section>





            <section className="references">
                <motion.div
                    className="references-wrapper"
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2>Lo que dicen mis pacientes</h2>

                    <p className="references-subtitle">
                        Más de 200 opiniones positivas de pacientes en{" "}
                        <a
                            href="https://www.doctoralia.com.mx/lucrecia-ceja-barrera/internista/nuevo-leon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="doctoralia-link"
                        >
                            Doctoralia
                            {/* <img
                                src="/img/doctoralia.png"
                                alt="Doctoralia"
                                className="doctoralia-logo"
                            /> */}
                        </a>{" "}
                        que respaldan su atención médica.
                    </p>

                    <ReviewsCarousel />
                </motion.div>
            </section>



            {/* CTA */}
            <motion.section className="cta"

                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <h2 >¿Listo para priorizar tu salud?</h2>
                <p >No esperes a que los síntomas avancen. La atención médica oportuna es clave para mantener tu bienestar. Agenda una consulta con la Dra. Ceja y recibe un enfoque integral, personalizado y basado en más de 30 años de experiencia.</p>

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

            </motion.section>



        </div>
    )
}

export default transition(HomePage)
