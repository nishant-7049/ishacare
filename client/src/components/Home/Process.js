import React from 'react'
import styled from 'styled-components'

const Process = () => {
  return (
    <Container>
      <div className='body'>
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
      </div>
    </Container>
  )
}

export default Process

const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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

  .process-grid {
    margin: 6rem auto;
    display: grid;
    width: 80%;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
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
`
