


// src/components/Nav/BurgerMenu.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion'



export default function BurgerMenu({
    items = [
        { to: "/servicios", label: "Servicios" },
        { to: "/por-que-elegirme", label: "¿Por qué elegirme?" },
        { to: "/trayectoria-profesional", label: "Trayectoria" },
        { to: "/blog", label: "Blog" },
        { to: "/contactos", label: "Contacto" },
    ]
}) {
    const [open, setOpen] = useState(false);

    // chiudi con ESC + blocca scroll del body quando aperto
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* Bottone hamburger (visibile solo su mobile via CSS) */}
            {!open ? (<button
                className="bm-burger"
                onClick={() => setOpen(true)}
            >
                <div className="bm-burger-wrapper">
                    <span className="bm-bar" />
                    <span className="bm-bar" />
                    <span className="bm-bar" />
                </div>
            </button>) :

                <button
                    className="bm-close"
                    onClick={() => setOpen(false)}
                >
                    ×
                </button>

            }

            <AnimatePresence>
                {open && (
                    <div className="bm-overlay">

                        {/* clic sul backdrop chiude */}
                        <motion.div
                            className="bm-backdrop"
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        />


                    <motion.aside className="bm-panel"
                        initial={{ opacity: 0, x: "100%" }}   // parte leggermente sopra il bordo dell’overlay
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                    // transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1, type: 'spring' }}
                    >


                        <ul className="bm-list"

                        >
                            {items.map((it) => (
                                <li key={it.to}>
                                    <NavLink
                                        to={it.to}
                                        className="bm-link"
                                        onClick={() => setOpen(false)}
                                    >
                                        {it.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

