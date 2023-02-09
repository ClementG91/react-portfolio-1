import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RxDiscordLogo} from 'react-icons/rx'
import {BsTelephone} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_38x8ylc', 'template_gdtlryw', form.current, 'vQ84EJoos9_iaUBdq')

    e.target.reset()
  };

  return (
      <section id='contact'>
        <h2>Contactez moi</h2>


        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>clement.genest91@laposte.net</h5>
              <a href='mailto:clement.genest91@laposte.net'>Envoyer moi un mail</a>
            </article>
            <article className='contact__option'>
              <RxDiscordLogo className='contact__option-icon'/>
              <h4>Discord</h4>
              <h5>Evilstyle#2885</h5>
              <a href='https://discord.gg/rAHgU3RPJQ'>Rejoindre mon serveur</a>
            </article>
            <article className='contact__option'>
              <BsTelephone className='contact__option-icon'/>
              <h4>Téléphone</h4>
              <h5>06.42.80.55.76</h5>
              <a href='tel:+33642805576'>Apeller moi</a>
            </article>
          </div>
          {/* fin de contact option */}
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Prénom nom' required />
            <input type="email" name='email' placeholder='Votre Email' required />
            <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
            <button type='submit' className='btn btn-primary'>Envoyer</button>
          </form>  
        </div>
      </section>
  )
}

export default Contact