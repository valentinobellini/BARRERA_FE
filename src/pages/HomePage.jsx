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
                    text='La Dra. Ceja emplea un enfoque 360 ° para el manejo de la diabetes tipo 1, tipo 2 y gestacional. Combina ajuste farmacológico personalizado, educación diabetológica, monitoreo continuo de glucosa y estrategias de cambio de hábitos basadas en evidencia científica. Además, implementa tecnología de punta—como sensores CGM y apps de registro—que permite al paciente tomar decisiones informadas en tiempo real, minimizar picos hiperglucémicos y prevenir complicaciones micro- y macrovasculares. Su objetivo: lograr metas de HbA1c sostenibles y mejorar notablemente la calidad de vida.'
                ></ServiceCard>

                <ServiceCard
                    image='/img/ipertension.png'

                    title='Control de Hipertensión Arterial'
                    text='Mediante mapa ambulatorio de presión arterial (MAPA) de 24 h, análisis de riesgo cardiovascular y asesoría nutricional especializada, la Dra. Ceja crea planes de tratamiento que combinan farmacoterapia de última generación y modificación de estilo de vida. La doctora capacita al paciente en la autogestión de su salud, evitando crisis hipertensivas y disminuyendo la incidencia de infartos y accidentes cerebrovasculares. Se realizan ajustes terapéuticos en consultas presenciales y por teleconsulta segura, garantizando resultados medibles y duraderos.'
                ></ServiceCard>

                <ServiceCard
                    image='/img/general.png'

                    title='Medicina Interna General para Adultos'
                    text='Desde infecciones agudas (neumonías, pielonefritis) hasta el manejo coordinado de enfermedades multisistémicas (insuficiencia cardiaca, EPOC, artritis reumatoide), la Dra. Ceja ofrece una visión integral que contempla aspectos clínicos, funcionales y psicosociales. Utiliza algoritmos diagnósticos validados y se apoya en un equipo interdisciplinario para brindar al adulto joven o mayor una atención continua y humanizada, orientada a la prevención de hospitalizaciones y a la mejora de la autonomía.'
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
