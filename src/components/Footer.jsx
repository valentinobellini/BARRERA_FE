import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <p className="footer-title">Dra. Lucrecia Ceja Barrera</p>
                    <p>Médico Internista en Monterrey</p>
                    <p>Especialista en Medicina Interna</p>
                    <p>© 2025 · Todos los derechos reservados</p>
                    <div className="footer-legal-links">
                        <Link to="/aviso-de-privacidad" className="footer-legal-link">
                            Aviso de Privacidad
                        </Link>
                    </div>
                </div>

                <a
                    href="https://wa.me/528134526945?text=Hola%2C%20quisiera%20una%20consulta...."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="whatsapp-icon" />
                </a>
            </div>
        </footer>
    );
}
