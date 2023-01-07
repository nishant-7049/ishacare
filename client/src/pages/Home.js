import React from 'react'
import styled from 'styled-components'
import SliderImg from '../components/SliderImg'

const Home = () => {
  return (
    <Container>
      <div className='body'>
        <div className='hero container'>
          <div className='hero-con'>
            <h1 className='hero-head'>Isha Wellness Center</h1>
            <p className='hero-para'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, amet nisi? Quo reiciendis tempore deserunt, est
              delectus cum recusandae soluta.
            </p>
          </div>
        </div>
        <div className='process container'>
          <h2 className='process-head con-head'>Our Process</h2>
          <p className='process-para con-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            necessitatibus dolorum, minus odit incidunt voluptas in suscipit
            repudiandae officia qui!
          </p>
          <div className='process-grid'>
            <div className='process-item'>
              <div className='card'>
                <img src='/images/process1.jpg' alt='' />
                <div className='card-con'>
                  <h1 className='card-head'>Process 1</h1>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo debitis ipsam corporis, officiis omnis
                    perspiciatis?
                  </p>
                </div>
              </div>
            </div>
            <div className='process-item'>
              <div className='card'>
                <img src='/images/process2.jpg' alt='' />
                <div className='card-con'>
                  <h1 className='card-head'>Process 2</h1>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo debitis ipsam corporis, officiis omnis
                    perspiciatis?
                  </p>
                </div>
              </div>
            </div>
            <div className='process-item'>
              <div className='card'>
                <img src='/images/process3.jpg' alt='' />
                <div className='card-con'>
                  <h1 className='card-head'>Process 3</h1>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo debitis ipsam corporis, officiis omnis
                    perspiciatis?
                  </p>
                </div>
              </div>
            </div>
            <div className='process-item'>
              <div className='card'>
                <img src='/images/process4.jpg' alt='' />
                <div className='card-con'>
                  <h1 className='card-head'>Process 4</h1>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo debitis ipsam corporis, officiis omnis
                    perspiciatis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='therapists container'>
          <h2 className='therapists-head con-head'>
            Physiotherapists at your service
          </h2>
          <p className='therapists-para con-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod
            ipsum recusandae,
          </p>
          <SliderImg />
        </div>
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a,
  button {
    text-decoration: none;
    color: white;
  }

  .body {
    color: black;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    scroll-behavior: smooth;
  }

  .container {
    min-height: 100vh;
    padding: 3rem 0;
  }
  .con-head {
    text-decoration: underline #f480b1 2px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  .con-para {
    width: 60%;
    margin: 0 20%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .hero {
    position: absolute;
    height: 100vh;
    width: 100%;
    margin-bottom: 30px;
    background-image: url(/images/hero-background.jpg);
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 3;
  }
  .hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: -1;
  }
  .hero img {
    position: absolute;
    top: 5px;
    left: 4px;
  }

  .hero-con {
    font-weight: 400;
    margin-left: 20px;
    z-index: 2;
    color: white;
    width: 42%;
    position: absolute;
    top: 45%;
    right: 0;
    margin-right: 5rem;
    text-align: right;
  }
  .hero-head {
    margin-bottom: 10px;
  }
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%;
    transition: 0.2s;
    z-index: 4;
  }

  .nav-logo img {
    height: 50px;
    margin-left: 5%;
  }
  .nav-con {
    display: flex;
    justify-content: space-between;
    width: 25%;
    transition: all 1s ease 0s;
  }
  .nav-con a:hover {
    text-decoration: underline #f480b1 3px;
  }

  .sticky {
    margin: 0;
    background-color: #ffd6ec;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
  .login-button {
    height: 3rem;
    width: 5rem;

    border-color: inherit;
    background-color: inherit;
    transition: all 1s ease 0s;
  }
  .login-button:hover {
    background-color: #f480b1;
  }

  .process-grid {
    margin: 6rem auto;
    display: grid;
    width: 80%;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-items: start;
  }

  .process-item {
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.2s;
  }

  .process-item:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.5);
  }

  .card img {
    display: block;
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }

  .card-con {
    padding: 0.8rem;
  }

  .card-head {
    color: #f480b1;
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
  }

  .card-text {
    font-size: 0.8rem;
  }

  .therapists {
    position: relative;
    height: 100vh;
    background-color: #efefef;
  }
  .arrow-img {
    position: absolute;
    height: 2rem;
  }

  .arrow-button {
    position: absolute;
    top: 50%;
    background-color: #ffd6ec;
    transition: 0.2s;
    cursor: pointer;
    height: 3rem;
    width: 2r em;
    border: none;
  }

  .arrow-button:hover {
    background-color: #f480b1;
  }

  .next-button {
    right: 0;
  }

  .arrow-img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .prev-img {
    rotate: 90deg;
  }

  .next-img {
    rotate: 270deg;
  }

  .the-container {
    display: flex;
    flex-flow: nowrap;
    width: 80%;
    height: 19rem;
    margin: 6rem auto;
    overflow: hidden;
  }

  .the-details {
    width: 100%;
    padding: 10% 1.5rem;
  }

  .the-item {
    position: relative;
    left: 0;
    margin: 0 2rem;
    min-width: 30rem;
    width: 50%;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
  .the-item:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.5);
  }

  .the-card-con {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 1rem;
  }
  .the-name {
    padding-left: 0.6rem;
    font-size: 1.4rem;
    font-weight: 700;
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

  .the-exp img,
  .the-edu img {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 0.4rem;
  }

  .the-img {
    display: block;
    max-width: 256px;
    max-height: 256px;
  }
`
