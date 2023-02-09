import React from 'react'
import CV from '../../assets/CVGC.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'><span>Télécharger CV</span></a>
        <a href="#contact" className='btn btn-primary'><span>Contact</span></a>
    </div>
  )
}

export default CTA