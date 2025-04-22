// import { Link } from 'react-router-dom'
import './serviceCard.css'
import { motion } from 'framer-motion'

const ServiceCard = ({ image, title, text }) => {
    return (
        <motion.div className="service-card"
            whileHover={{
                scale: 1.03,
                // boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)'
            }}>
            <div className="service-img" ><img src={image} alt="" /></div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-text">{text}</p>
        </motion.div>
    )
}

export default ServiceCard
