import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import ecg from "../assets/animations/ecg.json";

import BurgerMenu from "./BurgerMenu";
import "./BurgerMenu.css";

export default function NavBar() {
    return (
        <>
            <div className='navbar-container'>
                <div className="ecg-container">
                    <NavLink to="/" end>
                        <Lottie
                            animationData={ecg}
                            loop
                            autoplay
                            speed={2} // velocità doppia
                        />
                    </NavLink>
                </div>

                <nav className="navlist">
                    <motion.ul


                    // initial={{ opacity: 0, x: 300 }}
                    // animate={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 1, ease: 'easeOut', delay: 0.1, type: 'spring' }}
                    >


                        {/* 
                        <li className="nav-item">
                            <NavLink to="/admin">*</NavLink>
                        </li> */}


                        <li className="nav-item">
                            <NavLink to="/servicios">Servicios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/por-que-elegirme">¿Por qué elegirme?</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/trayectoria-profesional">Trayectoria</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactos">Contacto</NavLink>
                        </li>
                    </motion.ul>



                    {/* burger menu (visibile da CSS sotto 768px) */}
                </nav>
                <BurgerMenu

                />
            </div>
        </>
    )
}
