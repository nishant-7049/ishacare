import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email</label>
          <br />
          <input
            type='email'
            name='email'
            placeholder='Type your name'
            autoComplete='email'
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type='password'
            name='password'
            placeholder='Type your password'
            autoComplete='current-password'
          />
        </div>
        <Button>
          <button type='submit'>Submit</button>
        </Button>
      </form>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 1rem;
  margin-top: 5rem;
  width: 20%;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: rgb(141, 246, 255);
  background: -moz-linear-gradient(
    90deg,
    rgba(141, 246, 255, 1) 0%,
    rgba(236, 145, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(141, 246, 255, 1) 0%,
    rgba(236, 145, 255, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(141, 246, 255, 1) 0%,
    rgba(236, 145, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8df6ff",endColorstr="#ec91ff",GradientType=1);

  h2 {
    text-align: center;
    align-items: center;
    margin: 1rem auto;
  }
  form,
  form div {
    margin: 1rem auto;
  }

  input {
    border: none;
    border-radius: 3px;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 680px) {
    width: 50%;
  }
`

const Button = styled.div`
  margin: auto;
  text-align: center;
  align-items: center;

  button {
    border-radius: 15px;
    border: none;
    font-size: 20px;
    padding: 0.5rem 1rem;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    background: rgba(141, 246, 255, 1);
  }

  button:hover {
    background: rgba(236, 145, 255, 1);
  }
`
