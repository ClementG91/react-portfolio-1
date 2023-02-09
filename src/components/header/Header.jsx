import React from 'react'
import './header.css'
import CTA from'./CTA'
import HeaderSocial from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Clément Genest</h1>
        <h5 className="text-light">Intégrateur Web Junior</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <HeaderSocial />

        <a href="#contact" className='scroll__down'>Allez aux contact </a>

      </div>
    </header>
  )
}

export default Header