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
            transition={{ duration: 0.8, ease: "easeOut" }}

            whileHover={{
                scale: 1.02,
                transition: {
                    duration: 0.15,
                    ease: [0.22, 1, 0.36, 1] // ease "cinematografica"
                }
            }}>

            <div className="service-img" ><img src={image} alt="" /></div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-text">{text}</p>
        </motion.div>
    )
}

export default ServiceCard
