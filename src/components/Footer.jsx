import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <p className="footer-title">Dra. Lucrecia Ceja Barrera</p>
                    <p>Médico Internista en Monterrey</p>
                    <p>Especialista en Medicina Interna</p>
                    <p>© 2025 · Todos los derechos reservados</p>
                </div>

                <a
                    href="https://wa.me/393286886891?text=Ciao%2C%20vorrei%20più%20info"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="whatsapp-icon" />
                </a>
            </div>



        </footer>
    );
}
