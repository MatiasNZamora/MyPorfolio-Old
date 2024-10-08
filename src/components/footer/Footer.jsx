import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoLinkedin} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MATIAS N. ZAMORA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/matias.zamora.5688/" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/MatynZamora/" target="_blank"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/matiasnzamora/" target="_blank"><IoLogoLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Matias N. Zamora. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer