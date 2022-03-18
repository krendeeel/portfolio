import React, { useRef, useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { useOnScreen } from '../hooks';
import { socials } from '../data';

const Contact = () => {

    const formRef = useRef();

    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_ktn4b5v', 'template_9ko7c1i', formRef.current, 'vkpu1ICLwizFHVzIa');
        e.target.reset();
    }

    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const navigate = useNavigate();
    useEffect(() => {
        if (isVisible) {
            navigate('/#contact');
        }
    }, [isVisible]);

    return (
        <section id='contact'>
            <h5>Связаться со мной</h5>
            <h2>Контакты</h2>
            <div className="container contact__container" ref={ref}>
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h5>Email</h5>
                        <a href={socials.email} target='_blank' rel="noreferrer">
                            <h4>{socials.emailName}</h4>
                        </a>
                    </article>
                    <article className='contact__option'>
                        <FaTelegramPlane className='contact__option-icon' />
                        <h5>Telegram</h5>
                        <a href={socials.telegram} target='_blank' rel="noreferrer">
                            <h4>{socials.telegramName}</h4>
                        </a>
                    </article>
                    <article className='contact__option'>
                        <IoMdCall className='contact__option-icon' />
                        <h5>Телефон</h5>
                        <a href={socials.telephone} target='_blank' rel="noreferrer">
                            <h4>{socials.telephoneName}</h4>
                        </a>
                    </article>
                </div>
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                >
                    <h4>Hапишите письмо прямо сейчас:</h4>
                    <input type="text" name='name' placeholder='Вaше имя' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="6" placeholder='Введите сообщение...' required />
                    <button type='submit' className='btn btn-primary'>Отправить</button>
                </form>
            </div>
        </section >
    );
}

export default Contact;
