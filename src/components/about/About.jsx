import React from 'react'
import './about.css'
import ME from '../../assets/option-3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
                {/* <small>Years Working</small> <br></br>
              <a>View</a> */}
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
                {/* <small>Worldwide</small><br></br>
              <a>View</a> */}
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Certifications</h5>
                {/* <small>10+ Completed</small><br></br>
              <a>View</a> */}
            </article>

          </div>
          <p>
          Hi! I'm Matias, a FullStack developer with a special focus on backend and building robust server-side solutions, I am very passionate about my work.  My experience focuses on development with NodeJS. I specialize in the NestJS meta framework.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About