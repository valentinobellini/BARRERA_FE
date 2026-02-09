


import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./PorQueElegirme.css";
import transition from "../components/transition";

const reasons = [
    {
        image: "/img/trayectoria.png",
        title: "Trayectoria clínica sólida",
        items: [
            "Más de 20 años de experiencia clínica continua atendiendo enfermedades crónicas y agudas.",
            "Ex-Jefa de la Unidad de Terapia Intensiva del HGZ N.º 6 del IMSS.",
            "Consulta privada en el Hospital San Vicente, Centro de Monterrey.",
        ],
    },
    {
        image: "/img/credenciales.png",
        title: "Credenciales y liderazgo profesional",
        items: [
            "Cédula profesional 1119149 y especialidad en Medicina Interna (IMSS-Monterrey).",
            "Expresidenta del Colegio de Medicina Interna del Noreste y actual secretaria de Comunicación Social de COMINE.",
            "Miembro activo del Colegio de Médicos Cirujanos de Nuevo León.",
        ],
    },
    {
        image: "/img/confianza.png",
        title: "Confianza avalada por los pacientes",
        items: [
            "215 opiniones verificadas, todas positivas (5 ★) en Doctoralia.",
            "Certificado de Excelencia basado en valoraciones reales.",
        ],
    },
    {
        image: "/img/tecnologia.png",
        title: "Tecnología y enfoque integral",
        items: [
            "Monitoreo remoto de glucosa (CGM), MAPA 24 h y teleconsulta segura.",
            "Planes personalizados que integran nutrición clínica, ejercicio y farmacoterapia de última generación.",
        ],
    },
    {
        image: "/img/investigacion.png",
        title: "Investigación y actualización continua",
        items: [
            "Autora colaboradora en la revista Medicina Interna de México sobre tendencias en diabetes tipo 2.",
            "Asistencia anual a congresos nacionales e internacionales para aplicar las guías más recientes.",
        ],
    },
    {
        image: "/img/paciente.png",
        title: "Atención centrada en el paciente",
        items: [
            "Consultas de 40 minutos en promedio, lenguaje claro y seguimiento por WhatsApp médico.",
            "Educación al paciente y a su familia para la autogestión de la enfermedad.",
            "Protocolos de bioseguridad estrictos: ventilación, desinfección y distanciamiento.",
        ],
    },
    {
        image: "/img/ubicacion.png",
        title: "Ubicación y accesibilidad",
        items: [
            "Consultorio en Ruperto Martínez #1200, Zona Centro, Monterrey, con fácil acceso y estacionamientos cercanos.",
            "Videoconsulta disponible para pacientes fuera del área metropolitana o con movilidad reducida.",
        ],
    },
];

const PorQueElegirmePage = () => {
    const listRef = useRef(null);

    const [step, setStep] = useState(0);            // larghezza card
    const [visibleCount, setVisibleCount] = useState(3); // quante card entrano
    const [activeIndex, setActiveIndex] = useState(0);   // index di partenza vista

    // ✅ misura card + quante entrano nel viewport del carousel
    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const firstCard = list.querySelector(".porque-card");
        if (!firstCard) return;

        const cardW = firstCard.offsetWidth;
        setStep(cardW);

        // quante card entrano nella larghezza visibile del carousel
        const count = Math.max(1, Math.floor(list.clientWidth / cardW));
        setVisibleCount(count);

        // parte dalla prima vista
        list.scrollLeft = 0;
        setActiveIndex(0);
    }, []);

    // ✅ scrolla quando cambia activeIndex
    useEffect(() => {
        const list = listRef.current;
        if (!list || !step) return;

        list.scrollTo({ left: activeIndex * step, behavior: "smooth" });
    }, [activeIndex, step]);

    // ✅ ultimo "start index" possibile per vedere una pagina completa
    const maxStartIndex = Math.max(0, reasons.length - visibleCount);

    // ✅ wrap: quando sei sull’ultima pagina (es: 4-5-6) → prossimo click torna a 0
    const next = () => {
        setActiveIndex((i) => (i >= maxStartIndex ? 0 : i + 1));
    };

    // ✅ wrap indietro: quando sei a 0 → vai all’ultima pagina completa
    const prev = () => {
        setActiveIndex((i) => (i <= 0 ? maxStartIndex : i - 1));
    };

    return (
        <motion.section
            className="porque-elegirme"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1, type: "spring" }}
        >
            <h2 className="porque-elegirme-title">
                Por qué Elegir a la Dra. Lucrecia Ceja <br /> como tu Médico Internista en Monterrey
            </h2>

            <p className="porque-elegirme-subtitle">
                Cuando se trata de tu salud, elegir al especialista adecuado marca toda la diferencia.
                Con más de dos décadas de práctica, formación de alto nivel y el respaldo de cientos
                de pacientes satisfechos, la Dra. Lucrecia Ceja Barrera se posiciona como una de las
                internistas más reconocidas de Monterrey. A continuación encontrarás los motivos
                concretos que la convierten en la mejor elección para el cuidado integral de adultos.
            </p>

            <div className="porque-carousel-wrapper">
                <ul className="porque-cards-wrapper" ref={listRef}>
                    {reasons.map((r, i) => (
                        <li key={i} className="porque-item">
                            <motion.div
                                className="porque-card"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="porque-img">
                                    <img src={r.image} alt={r.title} />
                                </div>

                                <h2>{r.title}</h2>

                                <ul>
                                    {r.items.map((txt, idx) => (
                                        <li key={idx}>{txt}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </li>
                    ))}
                </ul>

                <div className="porque-controls">
                    <button className="porque-arrow porque-arrow-prev" onClick={prev}>
                        <span className="arrow-icon">
                            ←
                        </span>
                    </button>


                    <button className="porque-arrow porque-arrow-next" onClick={next}>
                        <span className="arrow-icon">
                            →
                        </span>
                    </button>

                </div>
            </div>
        </motion.section>
    );
};

export default transition(PorQueElegirmePage);
