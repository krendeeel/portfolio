import React, { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen } from 'react-icons/ai';
import { BiListCheck, BiMessageSquareDetail } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState(location.hash || '#');
    useEffect(() => {
        setActiveNav(location.hash || '#');
    }, [location.hash]);
    const toLink = e => setActiveNav(e.target.dataset.href);
    return (
        <nav>
            <a href='#'
                data-href='#'
                onClick={toLink}
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a href='#about'
                className={activeNav === '#about' ? 'active' : ''}
                data-href='#about'
                onClick={toLink}
            >
                <AiOutlineUser />
            </a>
            <a href='#experience'
                className={activeNav === '#experience' ? 'active' : ''}
                data-href='#experience'
                onClick={toLink}
            >
                <BiListCheck />
            </a>
            <a href='#portfolio'
                className={activeNav === '#portfolio' ? 'active' : ''}
                data-href='#services'
                onClick={toLink}
            >
                <AiOutlineFolderOpen />
            </a>
            <a href='#contact'
                className={activeNav === '#contact' ? 'active' : ''}
                data-href='#contact'
                onClick={toLink}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
}

export default Nav;
