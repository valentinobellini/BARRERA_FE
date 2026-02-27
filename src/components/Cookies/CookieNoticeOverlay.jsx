import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieNoticeOverlay.css";

const COOKIE_NOTICE_KEY = "cookie_notice_ack_v1";

export default function CookieNoticeOverlay() {
    const [isOpen, setIsOpen] = useState(() => {
        try {
            return localStorage.getItem(COOKIE_NOTICE_KEY) !== "1";
        } catch {
            return true;
        }
    });

    useEffect(() => {
        if (!isOpen) return undefined;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const handleAccept = () => {
        try {
            localStorage.setItem(COOKIE_NOTICE_KEY, "1");
        } catch {
            // no-op
        }
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="cookie-notice-overlay" role="dialog" aria-modal="true" aria-label="Aviso de cookies">
            <div className="cookie-notice-card">
                <h3 className="cookie-notice-title">Aviso de cookies</h3>
                <p className="cookie-notice-text">
                    Este sitio utiliza cookies y Google Analytics para analizar el tráfico y mejorar la experiencia.
                    Al continuar, aceptas el uso de cookies.
                </p>

                <div className="cookie-notice-links">
                    <Link to="/aviso-de-privacidad" className="cookie-notice-link">
                        Aviso de Privacidad
                    </Link>
                </div>

                <button type="button" className="cookie-notice-btn" onClick={handleAccept}>
                    Aceptar
                </button>
            </div>
        </div>
    );
}
