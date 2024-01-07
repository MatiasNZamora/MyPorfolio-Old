import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/taskerapp-1.png'
import IMG2 from '../../assets/magios shop-1.png'
import IMG3 from '../../assets/happytravel-1.png'
import IMG4 from '../../assets/bienesraices-1.png'


const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Bienes Raices',
    github: 'https://github.com/MatiasNZamora/bienesRaices.git',
    demo: 'http://bienesraices.matiasnzamora.com.ar',
    tech: '# Html | CSS'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Tasker App',
    github: 'https://github.com/MatiasNZamora/task-page.git',
    demo: 'https://taskerapp-mnz.netlify.app',
    tech: '# JavaScript | Html | CSS'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Magios Shop',
    github: 'https://github.com/MatiasNZamora/magiosshop.git',
    demo: 'http://magiosshop.matiasnzamora.com.ar',
    tech: '# React | Boostrap | JsonApi'
  },
  {
    id: 4,
    image: IMG2,
    title: 'Rest - Api',
    github: 'https://github.com/MatiasNZamora/resApi-MongoDB.git',
    demo:   'http://magiosshop.matiasnzamora.com.ar',
    tech: '# NodeJS | Typescript | JWT | MongoDB | Passaport'
  } 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, tech}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                <br/>
              </div>
                <p>{tech}</p>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio