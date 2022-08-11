import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/taskerapp-1.png'
import IMG2 from '../../assets/magios shop-1.png'
import IMG3 from '../../assets/happytravel-1.png'
import IMG4 from '../../assets/bienesraices-1.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tasker App',
    github: 'https://github.com/MNZ-CoderHouse/MNZ-TaskerApp.git',
    demo: 'https://taskerapp-mnz.netlify.app'
  },
  {
    id: 2,
    image: IMG4,
    title: 'Bienes Raices',
    github: 'https://github.com/MatiasNZamora/BienesRaices',
    demo: 'http://bienesraices.matiasnzamora.com.ar'
   
  },
  {
    id: 3,
    image: IMG3,
    title: 'Happy Travel',
    github: 'https://github.com/MNZ-codo-a-codo/Marginados-Final-',
    demo: 'http://happytravel.matiasnzamora.com.ar'
  },
  {
    id: 4,
    image: IMG2,
    title: 'Magios Shop',
    github: 'https://github.com/MNZ-codo-a-codo/Marginados-Final-',
    demo: 'http://magiosshop.matiasnzamora.com.ar'
  },
  
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio