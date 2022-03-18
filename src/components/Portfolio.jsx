import React, { useRef, useEffect } from 'react';
import { useOnScreen } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { portfolio } from '../data';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const navigate = useNavigate();
    useEffect(() => {
        if (isVisible) {
            navigate('/#portfolio');
        }
    }, [isVisible])

    return (
        <section id='portfolio' >
            <h5>Мои работы</h5>
            <h2>Портфолио
            </h2>
            <div className="container portfolio__container" ref={ref}>
                {
                    portfolio.map(i =>
                        <PortfolioItem
                            key={i.github}
                            {...i}
                        />
                    )
                }
            </div>
        </section>
    );
}

export default Portfolio;
