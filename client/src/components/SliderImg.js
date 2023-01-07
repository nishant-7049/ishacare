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
    arrow: true,
  };
  return (
    <Container>
      <Slider {...settings}>

        <Items>
          <div className="the-details">
            <div className="the-con">
              <h3 className="the-name">Dr. Name Lastname</h3>
              <spam className="the-exp">
                <MdWork />
                <p className="the-para">5 Years of Experience</p>
              </spam>
              <spam className="the-edu">
                <MdSchool />
                <p className="the-para">This College of Science</p>
              </spam>
            </div>
          <div className="the-image">
            <img src="/images/doc1.png" alt="" />
          </div>
          </div>
        </Items>
        <Items>
          <div className="the-details">
            <div className="the-con">
              <h3 className="the-name">Dr. Name Lastname</h3>
              <spam className="the-exp">
                <MdWork />
                <p className="the-para">5 Years of Experience</p>
              </spam>
              <spam className="the-edu">
                <MdSchool />
                <p className="the-para">This College of Science</p>
              </spam>
            </div>
          <div className="the-image">
            <img src="/images/doc1.png" alt="" />
          </div>
          <div>
            <img src='/images/doc1.png' alt='' />
          </div>
        </Items>
      </Slider>
    </Container>
  );
};

export default SliderImg;

const Container = styled.div`
  margin: 2rem 5rem;
  .slick-prev:before,
  .slick-next:before {
    color: black !important;
  }
`
const Items = styled.div`
margin: 0 1rem;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-arrow  {
    display: inline;
  }
  .the-details {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  .the-name {
    margin-bottom: 1.2rem;
    color: #1c75bc;
  }
  .the-image {
    width: 40%;
  }
  .the-image img {
    width: 100%;
  }
  .the-exp,
  .the-edu {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
    -ms-flex-align: start;
    align-items: center;
  }
 
  .the-para {
    margin-left: 0.5rem;
  }
`;
