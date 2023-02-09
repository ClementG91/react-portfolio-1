import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

      <div className='footer__socials'>
        <a href="https://twitter.com"><BsLinkedin /></a>
        <a href="https://www.linkedin.com/in/clementgenest/"><BsGithub /></a>
        <a href="https://github.com/ClementG91"><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Clement Genest. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer