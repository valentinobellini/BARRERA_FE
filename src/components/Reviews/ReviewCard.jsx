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
                style={{ color: '#FA9F47' }}
            />
        );
    }

    return (
        // <div className="review-card">
        //     <img className='doctoralia-logo' src="/img/doctoralia.png" alt="" />

        //     <div className="review-wrap">
        //         <h3 className="review-name">{review.name}</h3>
        //         <p className="review-text">{review.text}</p>
        //         <div className="star">{stars}</div>
        //     </div>
        // </div>



        <div className="review-card">
            <img className="doctoralia-logo" src="/img/doctoralia.png" alt="" />

            <div className="review-wrap">
                <h3 className="review-name">{review.name}</h3>
                <p className="review-text">{review.text}</p>
            </div>

            <div className="review-stars">{stars}</div>
        </div>

    );
}
