import React from 'react'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className='header__socials'>
        <a href="https://twitter.com" rel="noopener noreferrer"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/clementgenest/" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ClementG91" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials