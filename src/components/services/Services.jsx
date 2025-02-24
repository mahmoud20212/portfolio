import { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Product <br /> Designer
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="ui uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                I specialize in crafting user-centered, visually engaging digital experiences that enhance functionality and aesthetics. Let’s collaborate to bring your vision to life!
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design intuitive and seamless <strong>user interfaces (UI).</strong>
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create engaging <strong>user experiences (UX)</strong> with interactive elements.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                    I develop responsive <strong>web pages</strong> with modern design principles.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                    I help position and enhance <strong>your brand identity.</strong>
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design high-quality <strong>mockups and prototypes</strong> for businesses.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Web <br /> Development
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="ui uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Web Development</h3>
                            <p className="services__modal-description">
                                I specialize in building fast, secure, and scalable web applications tailored to business needs. Let’s create a seamless digital experience together!
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                    I develop dynamic <strong>frontend and backend</strong> solutions.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I optimize <strong>website performance</strong> for speed and efficiency.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I build secure and scalable <strong>web applications.</strong>
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I integrate <strong>APIs and databases</strong> for seamless functionality.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I ensure <strong>responsive and user-friendly</strong> designs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            UI/UX <br /> Designer
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="ui uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">
                                I specialize in creating intuitive, user-friendly designs that enhance digital experiences and engagement. Let’s craft seamless and visually appealing interfaces together!
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design <strong>clean and modern user interfaces (UI).</strong>
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I enhance <strong>user experiences (UX)</strong> with thoughtful interactions.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create <strong>wireframes, prototypes, and mockups.</strong>
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I focus on <strong>usability, accessibility, and responsiveness.</strong>
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I align designs with <strong>brand identity and business goals.</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
