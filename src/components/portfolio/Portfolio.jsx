import "./protfolio.css"
import { useState } from "react";
import { Data } from "./Data";

const Portfolio = () => {
    const [dataState, setData] = useState(Data);
    const [toggleState, setToggle] = useState('');

    function filterCategory(category) {
        if (category === '') {
            setData(Data);
        } else {
            const result = Data.filter(item => item.category === category);
            setData(result);
        }
        setToggle(category);
    }

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="portfolio__container container">
                <div className="portfolio__tabs">
                    <div 
                    onClick={() => filterCategory('')} 
                    className={
                        toggleState === ''
                        ? "portfolio__button portfolio__active button--flex"
                        : "portfolio__button button--flex"
                    }>
                        All
                    </div>
                    <div 
                    onClick={() => filterCategory('web')}
                    className={
                        toggleState === 'web'
                        ? "portfolio__button portfolio__active button--flex"
                        : "portfolio__button button--flex"
                    }>
                        Web
                    </div>
                </div>
                <div className="portfolio__sections grid">
                    {
                        dataState.map(({ id, title, image, link}) => {
                            return(
                                <div key={id} className="portfolio__card">
                                    <img src={image} alt="" className="portfolio__img" />
                                    <h3 className="portfolio__title">{title}</h3>
                                    <a href={link} className="portfolio__link">
                                        Demo
                                        <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
