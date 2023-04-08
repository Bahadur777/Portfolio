import React from 'react'
import './experience.css'
import {DiHtml5} from 'react-icons/di'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience-title'>What skills I have</h5>
      <h2 className='ttrp'>My Experience</h2>
      <div className="container experience-container">
        <h3 className='experience_title'>Front End Development</h3>
        <div className="experience-main">
          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5 className= 'experi-icon'>HTML</h5>
          </article>

          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>

          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>

          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>
          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>
          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>
          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>
          <article className="experience-details">
          <DiHtml5  className= 'experi-icon'/>
          <h5>HTML</h5>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience