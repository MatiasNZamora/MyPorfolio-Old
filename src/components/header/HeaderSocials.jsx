import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/matiasnzamora/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/matynzamora/?hl=es" target="_blank"><FaInstagram/></a>
        <a href="https://github.com/MatiasNZamora" target="_blank"><FaGithub/></a>
        <a href="https://linktr.ee/matias_n_zamora" target="_blank"><FiDribbble/></a>
    </div>
  )
}


export default HeaderSocials