import React from 'react'
import styled from 'styled-components'
import TesimonialList from './TestimonialList'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <TestimonialsSection id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container TestimonialContainer'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
          TesimonialList.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide className="Testimonial" key={index}>
              <ClientAvatar>
                <ClientImage src={avatar} alt={name} />
              </ClientAvatar>
              <ClientName>{name}</ClientName>
              <ClientReview>{review}</ClientReview>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </TestimonialsSection>
  )
}

export default Testimonials

const TestimonialsSection = styled.section``
const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`
const ClientImage = styled.img``
const ClientName = styled.h5``
const ClientReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`