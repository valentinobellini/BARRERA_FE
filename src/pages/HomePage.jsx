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
                            text='La Dra. Ceja ofrece un enfoque completo para el manejo de la diabetes, enfocándose en prevenir complicaciones y mejorar la calidad de vida de sus pacientes mediante educación y monitoreo personalizado.'
                        ></ServiceCard>

                        <ServiceCard
                            image='/img/ipertension.png'

                            title='Control de Hipertensión Arterial'
                            text='Con una estrategia de diagnóstico y control de la presión arterial, la Dra. Ceja ayuda a prevenir enfermedades cardiovasculares y a mejorar la salud de sus pacientes.'
                        ></ServiceCard>

                        <ServiceCard
                            image='/img/general.png'

                            title='Medicina Interna General para Adultos'
                            text='La Dra. Ceja aborda desde enfermedades agudas hasta el manejo de condiciones complejas, brindando un enfoque integral en la salud del adulto.'
                        ></ServiceCard>
                    </div>
                </motion.div>
            </section>




            {/* REFERENCIAS */}
            <section className="references">
                <motion.div className="references-wrapper"
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h2>Lo que dicen mis pacientes</h2>

                    {/* <ReviewCards /> */}
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

                <button className="cta-button"
                >
                    Agenda tu cita
                </button>

            </motion.section>



        </div>
    )
}

export default transition(HomePage)
