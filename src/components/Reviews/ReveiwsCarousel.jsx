// src/components/References/ReviewsCarousel.jsx
import { useState } from 'react';
import ReviewCard from './ReviewCard';
import './ReviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

export default function ReviewsCarousel() {
    const visible = 3;
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(reviews.length / visible);
    const start = page * visible;
    const current = reviews.slice(start, start + visible);

    const prev = () =>
        setPage(p => (p - 1 + totalPages) % totalPages); // 👈 loop circolare indietro

    const next = () =>
        setPage(p => (p + 1) % totalPages); // 👈 loop circolare avanti

    return (
        <div className="reviews-carousel">
            <button className="carousel-btn" onClick={prev} aria-label="Prev">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="carousel-viewport">
                {current.map((r, i) => (
                    <ReviewCard key={`${r.name}-${r.date}-${i}`} review={r} />
                ))}
            </div>

            <button className="carousel-btn" onClick={next} aria-label="Next">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
