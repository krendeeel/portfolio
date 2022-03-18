import React, { useRef, useEffect } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { useOnScreen } from '../hooks';
import { experience } from '../data';

const Experience = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const navigate = useNavigate();
    useEffect(() => {
        if (isVisible) {
            navigate('/#experience');
        }
    }, [isVisible]);
    return (
        <section id='experience' >
            <h5>Опыт работы</h5>
            <h2>Ключевые навыки</h2>
            <div className="container experience__container">
                {
                    experience.skills.map(i => <p><b>{i[0]}</b>{i[1]}</p>)
                }
                <div className='experience__details' ref={ref}>
                    <article>
                        <h4>Frontend:</h4>
                        <ul>
                            {experience.frontend.map(i =>
                                <li
                                    key={i}
                                >
                                    <BsPatchCheckFill className='experience__details-icon' />
                                    {i}
                                </li>
                            )
                            }
                        </ul>
                    </article>
                    <article>
                        <h4>Backend:</h4>
                        <ul>
                            {experience.backend.map(i =>
                                <li
                                    key={i}
                                >
                                    <BsPatchCheckFill className='experience__details-icon' />
                                    {i}
                                </li>
                            )
                            }
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Experience;
