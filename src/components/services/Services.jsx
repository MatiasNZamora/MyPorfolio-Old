import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> Wordpress </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> My first page. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Ecommerce. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Landing Page. </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Rest Api. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Ecommerce Backend </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Micro Service. </p>
            </li>
          </ul>
        </article>
        
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3> Content Creation </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> gastronomic photography. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Programming web teacher </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services