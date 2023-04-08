import React from 'react'
import './about.css'
import Image from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiFolderOpen} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5  >Get to Know</h5>
      <h2 className='fgrt'>About Me</h2>

     <div className='container'>
     <div className="about_container">
        <div className="about_image">
          <div className="about-me-image">
            <img src={Image} alt="" className='about-i-img'/>
          </div>
        </div>

        <div className="about-content">
            <div className="about-cards">
              <article className='about-card'>
                <FaAward className='about-icons'/>
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>
               <article className='about-card'>
                <FiUsers className='about-icons'/>
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>
               <article className='about-card'>
                <BiFolderOpen className='about-icons'/>
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>
            </div>
            <div className="bottom-content">
              <p className="btm-pera">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat vero reprehenderit magnam, pariatur id eveniet? Sit magnam accusamus impedit sunt! Vel labore ab quo nulla id repudiandae harum, voluptatem accusantium. Iusto iste amet atque nisi rerum magni aliquid, nobis sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta expedita temporibus architecto accusamus quae eligendi a error itaque fugiat consectetur.</p>

              <a href="#contact" className='btn btn-primary ght'> Let's talk</a>
            </div>
        </div>
      </div>
     </div>
    
    </section>
  )
}

export default About