// import { Link } from 'react-router-dom'
import './ServiceCard.css'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ServiceCard = ({ image, title, text }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (

        <motion.div className="service-card"
            ref={ref}
            initial={{ opacity: 0, y: 120 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                scale: { duration: 0.1, ease: [.33, .59, .83, .67] }
            }}
        >

            <div className="service-img" ><img src={image} alt="" /></div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-text">{text}</p>
        </motion.div>
    )
}

export default ServiceCard
