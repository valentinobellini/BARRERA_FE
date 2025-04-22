import { Link } from 'react-router-dom'
import './TextCard.css'

const TextCard = ({ title, text, link }) => {
    return (
        <div className="text-card">
            <h3 className="text-card-title">{title}</h3>
            <p className="text-card-text">{text}</p>
            {link && (
                <Link to={link} className="text-card-link">
                    Leer más →
                </Link>
            )}
        </div>
    )
}

export default TextCard
