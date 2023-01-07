import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import { MdSchool } from 'react-icons/md'
import { MdWork } from 'react-icons/md'

const SliderImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
  return (
    <Container>
      <Slider {...settings}>

        <Items>
          <div>
            <h3>Dr. John Williams</h3>
            <div>
              <MdWork />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <MdSchool />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div>
            <img src='/images/doc1.png' alt='' />
          </div>
        </Items>
        
      </Slider>
    </Container>
  )
}

export default SliderImg

const Container = styled.div`
  
`
const Items = styled.div`
  
`
