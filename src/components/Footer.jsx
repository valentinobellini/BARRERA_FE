import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <p className="footer-title">Dra. Lucrecia Ceja Barrera</p>
                    <p>Médico Internista en Monterrey</p>
                    <p>Especialista en Medicina Interna</p>
                </div>

                <div className="footer-bottom">
                    © 2025 · Todos los derechos reservados
                </div>
            </div>


            <a
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >
                <FaWhatsapp className="whatsapp-icon" />
                Contáctame en WhatsApp
            </a>
        </footer>
    );
}
