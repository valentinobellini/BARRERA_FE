// src/components/References/ReviewCard.jsx
import './ReviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ReviewCard({ review }) {
    // Se la prop manca, esci
    if (!review) return null;

    // Stelle fisse
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{ color: '#FFD700' }}
            />
        );
    }

    return (
        <div className="review-card">
            <h3 className="review-name">{review.name}</h3>
            <p className="review-text">{review.text}</p>
            <div className="star">{stars}</div>
        </div>
    );
}
