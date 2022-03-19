import React, { useRef, useEffect } from 'react';
import { useOnScreen } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { HiDownload } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';

import resume from '../assets/resume.pdf';
import photo from '../assets/photo.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const navigate = useNavigate();
    useEffect(() => {
        if (isVisible) {
            navigate('/');
        }
    }, [isVisible]);

    return (
        <header >
            <div className='container header__container'>
                <h1>Кренделев Роман</h1>
                <h5 className='text-light'>Frontend разработчик</h5>
                <div className='cta'>
                    <a
                        href={resume}
                        download
                        className='btn'
                    >
                        <HiDownload />
                        Резюме
                    </a>
                    <a
                        href='#contact'
                        className='btn btn-primary'
                    >
                        <IoMdCall />
                        Контакты
                    </a>
                </div>
                <HeaderSocials />
                <img src={photo} alt='photo' ref={ref} />
                <a href='#contact' className='scroll__down'>Листайте вниз</a>
            </div>
        </header>
    );
}

export default Header;
