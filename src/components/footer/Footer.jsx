import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mahmoud</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="#" className="footer__social-link">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="footer__social-link">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="footer__social-link">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Mahmoud Ouda. All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;
