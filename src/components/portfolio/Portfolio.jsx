import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes travaux récents</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" title="Image Bot de trading Crypto"/>
          </div>
          <h3>Bot de trading Crypto</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/ClementG91/FTX-RIP' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='/#' className='btn btn-primary'><span>Démo</span></a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Bot PRE farm</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/ClementG91/presearch-bot' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='/#' className='btn btn-primary'><span>Démo</span></a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Bot Boost Vinted</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/ClementG91/bot-vinted' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='/#' className='btn btn-primary'><span>Démo</span></a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Bot Discord Mirror</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/ClementG91/Portfolio-React/tree/master/react-portfolio-1' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='/#' className='btn btn-primary'><span>Démo</span></a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio