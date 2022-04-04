import React, { useRef, useEffect } from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { MdOutlineComputer } from 'react-icons/md';

import photo from '../assets/photo.png';
import { about } from '../data';
import { useOnScreen } from '../hooks';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const navigate = useNavigate();
    useEffect(() => {
        if (isVisible) {
            navigate('/#about');
        }
    }, [isVisible]);

    return (
        <section id='about'>
            <h5>Время для знакомства</h5>
            <h2>Немного обо мне</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={photo} alt='photo' />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards" ref={ref}>
                        <article className="about__card">
                            <MdOutlineComputer className='about__icon' />
                            <h5>Область</h5>
                            <small>{about.range}</small>
                        </article>
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Опыт</h5>
                            <small>{about.experience}</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Проекты</h5>
                            <small>{about.projects}</small>
                        </article>
                    </div>
                    <p>{about.text}</p>
                </div>
            </div>
        </section>
    );
}

export default About;
