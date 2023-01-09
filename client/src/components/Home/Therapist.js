import React from 'react'
import styled from 'styled-components'
import SliderTherapist from './Slider.therapist'

const Therapist = () => {
  return (
    <Container>
      <div className='body'>
        <div className='therapists container'>
          <h2 className='therapists-head con-head'>
            Physiotherapists at your service
          </h2>
          <p className='therapists-para con-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod
            ipsum recusandae,
          </p>
          <SliderTherapist />
        </div>
      </div>
    </Container>
  )
}

export default Therapist

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

  .therapists {
    position: relative;
    background-color: #efefef;
  }
`
