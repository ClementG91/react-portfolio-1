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
              <a href='mailto:clement.genest91@laposte.net'>Envoyez moi un mail</a>
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
              <a href='tel:+33642805576'>Apellez moi</a>
            </article>
          </div>
          {/* fin de contact option */}
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Prénom nom' required />
            <input type="email" name='email' placeholder='Votre Email' required />
            <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
            <button type='submit'>
            <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
              </div>
              <span>Envoyer</span>
            </button>
          </form>  
        </div>
      </section>
  )
}

export default Contact