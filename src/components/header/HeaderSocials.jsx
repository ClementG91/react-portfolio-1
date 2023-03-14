import React from 'react'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className='header__socials'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/clementgenest/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ClementG91" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials