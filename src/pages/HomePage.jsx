import TextCard from '../components/TextCard/TextCard'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection/HeroSection'
import ServiceCard from '../components/ServiceCard/ServiceCard'

const HomePage = () => {
    return (
        <div className="homepage">

            {/* HERO */}
            <section>
                <HeroSection></HeroSection>
            </section>



            {/* SERVICIOS */}
            <section className='services'>
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
            </section>




            {/* REFERENCIAS */}
            <section className="references">
                <h2>REFERENCIAS</h2>

            </section>

        </div>
    )
}

export default HomePage
