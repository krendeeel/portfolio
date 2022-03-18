import React from 'react';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socials } from '../data';

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href={socials.email} target='_blank'>
                <MdEmail />
            </a>
            <a href={socials.github} target='_blank' >
                <FaGithub />
            </a>
            <a href={socials.telegram} target='_blank'>
                <FaTelegramPlane />
            </a>
        </div>
    );
}

export default HeaderSocials;
