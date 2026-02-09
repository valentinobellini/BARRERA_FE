import "./Servicios.css";
import { motion } from "framer-motion";
import transition from "../components/transition";

const ServiciosPage = () => {
    return (
        <>
            <motion.div
                className="servicios"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.1,
                    type: "spring",
                }}
            >
                <h2 className="servicios-title">
                    Servicios de Medicina Interna Especializada en Monterrey
                </h2>

                <p className="servicios-text">
                    Su consultorio está ubicado en el <strong>Hospital de San Vicente</strong>, en el
                    centro de <strong>Monterrey</strong>. La Dra. Ceja ofrece un abanico de servicios
                    diseñados a la medida de cada paciente desde esde{" "}
                    <strong>chequeos preventivos (Check Up)</strong>, valoración de síntomas
                    inespecíficos, interpretación de estudios de laboratorio e imagenología,{" "}
                    <strong>diagnosticos</strong> precisos, hasta planes terapéuticos
                    individualizados que integran de ser necesario la referencia a servicios
                    Multidisciplinarios como <strong>nutrición clínica</strong>,{" "}
                    <strong>Cardiología</strong>, <strong>Nefrologia</strong>,{" "}
                    <strong>Actividad fisica etc.</strong> que optimizan la salud integral y
                    reducen estancias hospitalarias innecesarias.{" "}
                    <strong>Ofrece también el servicio de telemedicina</strong> para un seguimiento
                    continuo.
                </p>


                <div className="service-wrapper">
                    <div className="service-img">
                        <img src="/img/diabetes.png" alt="" />
                    </div>

                    <div className="service">

                        <h3 className="servicios-subtitle">
                            Tratamiento Integral para Diabetes en Monterrey
                        </h3>

                        <p className="servicios-text">
                            La Dra. Ceja emplea un enfoque 360° para el manejo de Prediabetes, Resistencia a la
                            Insulina, <strong>Diabetes Mellitus tipo 1 y tipo 2</strong>. Combina ajuste
                            farmacológico <strong>personalizado</strong>, <strong>educación para el autocontrol
                                de la Diabetes</strong>, <strong>Nutrición y Hábitos saludables</strong>, monitoreo
                            continuo de glucosa así como <strong>prevención</strong> de complicaciones como
                            amputaciones, <strong>daño cardiovascular</strong>, renal, ocular, etc. Además,
                            implementa tecnología de punta—como sensores y apps de registro—que permiten al
                            paciente tomar decisiones informadas en tiempo real, minimizar picos hipoglucémicos
                            y lograr metas de HbA1c (Hemoglobina glicosilada) sostenibles, mejorando con todo esto
                            la <strong>calidad de vida</strong>.
                        </p>

                    </div>
                </div>



                <div className="service-wrapper">


                    <div className="service">
                        <div className="service-img service-img-mobile">
                            <img src="/img/ipertension.png" alt="" />
                        </div>
                        <h3 className="servicios-subtitle">
                            Control de Hipertensión Arterial en Monterrey
                        </h3>



                        <p className="servicios-text">
                            La <strong>Hipertensión</strong> arterial es una de las enfermedades crónicas más
                            frecuentes y silenciosas, que requiere un seguimiento constante y profesional. La
                            Dra. Ceja te ayuda a mantener una presión arterial saludable creando planes de
                            tratamiento de acuerdo a tu edad y a otras condiciones de salud, que combinan
                            farmacoterapia de última generación y modificación de estilo de vida (peso,
                            alimentación, <strong>estrés</strong>, sueño, etc) y capacitando al paciente en la
                            autogestión de su salud, evitando crisis hipertensivas y disminuyendo la incidencia
                            de infartos y accidentes cerebrovasculares.
                        </p>

                    </div>

                    <div className="service-img service-img-desktop">
                        <img src="/img/ipertension.png" alt="" />
                    </div>
                </div>




                <div className="service-wrapper">
                    <div className="service-img">
                        <img src="/img/general.png" alt="" />
                    </div>

                    <div className="service">

                        <h3 className="servicios-subtitle">
                            Medicina Interna General para Adultos en Monterrey
                        </h3>

                        <p className="servicios-text">
                            La Medicina Interna trata una amplia variedad de enfermedades que afectan los órganos
                            internos de los adultos, incluyendo padecimientos cardiovasculares (Hipertensión,
                            Arritmias, Insuficiencia Cardíaca), Infecciones agudas, Problemas respiratorios (Asma,
                            EPOC, <strong>Neumonía</strong>), Gastrointestinales (Gastritis, Colitis, etc),
                            Metabólicas (Diabetes, Obesidad), Endocrinas (Hipo e Hipertiroidismo), Renales
                            (Insuficiencia renal, Pielonefritis) y un manejo coordinado de enfermedades
                            multisistémicas. La Dra. Ceja ofrece una visión integral que contempla aspectos
                            clínicos, funcionales y psicosociales. Utiliza algoritmos diagnósticos validados y se
                            apoya en un <strong>equipo interdisciplinario</strong> para brindar al adulto joven o
                            mayor una atención continua y humanizada, orientada a la <strong>prevención de
                                hospitalizaciones</strong> y a la <strong>mejora de la autonomía</strong>.
                        </p>

                    </div>
                </div>




            </motion.div>
        </>
    );
};

export default transition(ServiciosPage);
