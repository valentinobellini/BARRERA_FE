
// src/components/References/ReviewsCarousel.jsx
import { useEffect, useMemo, useState } from 'react';
import './ReviewsCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ReviewCard from './ReviewCard';
import { motion } from 'framer-motion'


const reviews = [
    { name: "Juan Camilo Maldonado O.", text: "Muy profesional en su evaluación de los análisis presentados. Excelentes recomendaciones para lograr mejores resultados en el tratamiento. Trato muy cordial.", date: "2025-01-16" },
    { name: "Daniel", text: "Excelente trato, explicaciones precisas, puntualidad", date: "2024-12-20" },
    { name: "Karla Lemus", text: "Excelente atención, se interesa genuinamente en el paciente, genera confianza y te motiva a seguir con el tratamiento.", date: "2024-12-20" },
    { name: "Lidia Pruneda", text: "Estoy muy satisfecha con la atención que me brinda la Doctora. Es clara en sus indicaciones y muestra empatía mientras consulta. Ya he tenido 3 consultas de seguimiento.", date: "2024-12-12" },
    { name: "Juany", text: "Cómo fue mi primer cita para mí todo estuvo muy bien", date: "2024-12-11" },
    { name: "Sp", text: "Excelente muy bien servicio   Todo muy bien excelente", date: "2024-12-11" },
    { name: "Rosa Elia", text: "Todo muy bien excelente atención de la doctora...", date: "2024-12-06" },
    { name: "Alicia Saavedra", text: "Estoy muy agradecida por su calidez, atención y apoyo...", date: "2024-12-04" },
    { name: "Graciela", text: "Me transmitió confianza", date: "2024-12-03" },
];

// ---- stessa logica delle MQ CSS, ma in JS ----
function computeVisibleFromMQ() {
    // usa gli stessi breakpoint delle tue @media
    const mq1 = window.matchMedia('(max-width: 768px)');  // mobile → 1
    const mq2 = window.matchMedia('(max-width: 1024px)'); // tablet → 2
    if (mq1.matches) return 1;
    if (mq2.matches) return 2;
    return 3; // desktop
}

export default function ReviewsCarousel() {
    // quante card mostrare (derivato dalle MQ)
    const [visible, setVisible] = useState(() =>
        typeof window === 'undefined' ? 3 : computeVisibleFromMQ()
    );

    // tieni JS e CSS sincronizzati quando cambia la viewport
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const update = () => setVisible(computeVisibleFromMQ());

        // ascolta cambi MQ (preciso) + resize (fallback)
        const mq1 = window.matchMedia('(max-width: 768px)');
        const mq2 = window.matchMedia('(max-width: 1220px)');

        mq1.addEventListener('change', update);
        mq2.addEventListener('change', update);
        window.addEventListener('resize', update); // per sicurezza

        // misura subito
        update();

        return () => {
            mq1.removeEventListener('change', update);
            mq2.removeEventListener('change', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    // paginazione
    const [page, setPage] = useState(0);
    const totalPages = useMemo(
        () => Math.ceil(reviews.length / visible) || 1,
        [visible]
    );
    const start = page * visible;
    const current = reviews.slice(start, start + visible);

    const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);
    const next = () => setPage(p => (p + 1) % totalPages);

    // riclampa pagina se cambia "visible"
    useEffect(() => {
        setPage(p => Math.min(p, totalPages - 1));
    }, [visible, totalPages]);

    return (
        <div className="reviews-carousel">
            <button className="carousel-btn" onClick={prev} aria-label="Prev">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <motion.div className="carousel-viewport"
                initial={{ opacity: 0, x: -250 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5, type: 'spring' }}>
                {current.map((r, i) => (
                    <ReviewCard key={`${r.name}-${r.date}-${i}`} review={r} />
                ))}
            </motion.div>

            <button className="carousel-btn" onClick={next} aria-label="Next">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
