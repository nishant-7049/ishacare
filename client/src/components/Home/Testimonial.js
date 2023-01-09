import React from 'react'
import styled from 'styled-components'
import SliderTestimonial from './Slider_testimonial'

const Testimonial = () => {
  return (
    <Container>
      <h2>Testimonials</h2>
      <p className='con-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam repellendus eum mollitia suscipit excepturi nulla molestiae, natus id velit.</p>
      <SliderTestimonial />
    </Container>
  )
}

export default Testimonial

const Container = styled.div`
  align-items: center;
  margin: 2rem 5rem;
  text-align: center;
  padding: 2rem 0;

  h2,
  p,
  SliderTestimonial {
    margin: 1rem auto;
  }

  .con-para {
    max-width: 70%;
  }

  h2 {
    text-transform: capitalize;
    color: #f4b9d2;
  }
`