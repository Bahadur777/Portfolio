import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const data = [
  {
    id:1,
    Image:AVATAR1,
    title: 'Bahadur mia sihab',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae vel iusto doloribus! Fuga cupiditate, debitis a non architecto, magnam officiis nihil fugit enim, saepe neque quas similique deserunt dicta soluta.'
  },
  {
    id:2,
    Image:AVATAR2,
    title: 'Bahadur mia sihab',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae vel iusto doloribus! Fuga cupiditate, debitis a non architecto, magnam officiis nihil fugit enim, saepe neque quas similique deserunt dicta soluta.'
  },
  {
    id:3,
    Image:AVATAR3,
    title: 'Bahadur mia sihab',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae vel iusto doloribus! Fuga cupiditate, debitis a non architecto, magnam officiis nihil fugit enim, saepe neque quas similique deserunt dicta soluta.'
  },
  {
    id:4,
    Image:AVATAR4,
    title: 'Bahadur mia sihab',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae vel iusto doloribus! Fuga cupiditate, debitis a non architecto, magnam officiis nihil fugit enim, saepe neque quas similique deserunt dicta soluta.'
  }
]
const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <h3 className='client-title'>Review From Clients</h3>
        <Swiper className="testimonials-container" pagination={true} modules={[Pagination]} >
          {
            data.map(({id, Image, title, review}, index)=>{
              return (
                <SwiperSlide key={id} className="testimonial mySwiper">
            <div className="client_avatar">
              <img src={AVATAR1} alt="" className='avatar' />
              <h5 className="client_name">{title}</h5>
              <small className="clients_review">
               {review}
              </small>
            </div>
          </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials