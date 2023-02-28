import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h2>À Propos</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="à propos" />
            </div>
          </div>
        

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experiences</h5>
              <small>12 mois en autodidacte</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>2 clients pour le moment</small>
            </article>

            <article className='about__card'>
              <AiFillFolder className='about__icons'/>
              <h5>Projets</h5>
              <small>6 projets completés</small>
            </article>
            
          </div>

          <p>
          Actuellement en reconversion professionnelle, je cherche à démarrer une formation d'intégrateur WEB en Alternance.
          Polyvalent, autonome, ayant la soif d'apprendre ainsi qu'extrêmement motivé, je souhaite développer mes compétences tout en ayant une expérience professionnelle significative.
          </p>

          <a href="#contact" className='btn btn-primary'><span>Parlons !</span></a>


        </div>
      </div>
    </section>
  )
}

export default About