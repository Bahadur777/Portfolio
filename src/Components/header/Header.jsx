import React from 'react'
import './header.css'
import CTA from '../header/CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
      <h5>Hello I'm</h5>
      <h1>Bahadur Mia</h1>
      <h5 className='text-light' >Front end Developer</h5>
      <CTA/>
      <HeaderSocial/>
     <div className='me' >
      <img src={ME} alt="" />
     </div>

     <a href="#contact" className='scroll_down'>Scroll Down</a>
     
    </div>
    </header>
  )
}

export default Header