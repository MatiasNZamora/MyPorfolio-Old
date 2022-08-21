import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/option-1.png'
import HeaderSocial from './HeaderSocials'
import Home from '../home/home'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="log">
          
        </div>
        <h5>Hello I'm</h5>
        <h1>Matias N. Zamora</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <Home />
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
