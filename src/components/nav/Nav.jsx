import React from 'react'
import './nav.css'
import {AiOutlineBook, AiOutlineHome, AiOutlineUser, AiFillSignal, AiOutlineLaptop} from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''} title="Accueil"><AiOutlineHome/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title="Portfolio"><AiOutlineLaptop/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title="À Propos"><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title="Experience"><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} title="Services"><AiFillSignal/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title="Contact"><BiMailSend/></a>
    </nav>
  )
}

export default Nav