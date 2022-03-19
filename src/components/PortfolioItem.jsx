import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';

const PortfolioItem = ({ image, title, github, demo }) => {
    return (
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={image} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a
                    href={github}
                    className='btn'
                    target='_blank'
                >
                    <FaGithub /> GitHub
                </a>
                <a
                    href={demo}
                    className='btn btn-primary'
                    target='_blank'
                >
                    <FiMonitor /> Demo-версия
                </a>
            </div>
        </article>
    );
}

export default PortfolioItem;
