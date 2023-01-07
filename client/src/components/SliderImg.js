import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { MdSchool } from 'react-icons/md'
import { MdWork } from 'react-icons/md'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
  return (
    <Container>
      <Slider {...settings}>
        <Items>
          <div className='disc-contain'>
            <h3>Dr. Lorem, ipsum. </h3>
            <div className='disc'>
              <MdWork />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='disc'>
              <MdSchool />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='doc-img'>
            <img src='/images/doc1.png' alt='' />
          </div>
        </Items>
        <Items>
          <div className='disc-contain'>
            <h3>Dr. Lorem, ipsum. </h3>
            <div className='disc'>
              <MdWork />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='disc'>
              <MdSchool />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='doc-img'>
            <img src='/images/doc1.png' alt='' />
          </div>
        </Items>
        <Items>
          <div className='disc-contain'>
            <h3>Dr. Lorem, ipsum. </h3>
            <div className='disc'>
              <MdWork />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='disc'>
              <MdSchool />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='doc-img'>
            <img src='/images/doc1.png' alt='' />
          </div>
        </Items>
      </Slider>
    </Container>
  )
}

export default SliderImg

const Container = styled.div`
  margin: 2rem 5rem;
  .slick-prev:before,
  .slick-next:before {
    color: black !important;
  }
`
const Items = styled.div`
  display: flex;

  .disc-contain {
    max-width: 50%;
  }

  .disc {
    display: flex;
    margin: 1rem;
  }

  .disc p {
    margin-left: 0.5rem;
  }

  .doc-img img {
    scale: 0.5;
    width: 100%;
  }

  .doc-img {
    max-width: 50%;
  }
`
