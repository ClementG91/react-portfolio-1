import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function services() {
  return (
    <section id='services'>
        <h2>Services</h2>

        <div className='container services__container'>
            <article className='service'>
                <div className='service__head'>
                    <h3>UI/UX Design</h3>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Recueil des besoins et identification des différents enjeux </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Transfert des atouts visuels et usuels d’une marque</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Définition du cahier des charges <br/>(Ergonomie, mode de navigation, identité visuelle, etc.)</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Réalisation de mockups et de wireframes <br/>(Adobe XD, Figma)</p>
                    </li>
                </ul>
            </article>
            {/* fin de UX/UI */}
            <article className='service'>
                <div className='service__head'>
                    <h3>Web Dev</h3>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Analyse des besoins du client</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Conception d’un site web ou d’une application</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Réalisation de différents tests, correction des bugs éventuels</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p> Suivi technique et maintenance du site internet ou de l’App web </p>
                    </li>
                </ul>
            </article>
            {/* fin de Web dev */}
            <article className='service'>
                <div className='service__head'>
                    <h3>Analyse des Données</h3>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Manipuler des tableaux avec NumPy / Créer des data frames avec Pandas.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Construire des data visualisations avec Matplotlib et Seaborn.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Analyser des données pour choisir le type de base de données appropriées.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Tester une hypothèse sur une proportion, une moyenne ou une variance.</p>
                    </li>
                </ul>
            </article>
            {/* fin de création */}

        </div>
    </section>
  )
}

export default services