import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Nav>
      <Logo src='/images/logo.jpg' alt='img' />
      <Links>
        <Link to='/'> Home</Link>
        <Link to='/'> Route</Link>
        <Link to='/'> Route</Link>
        <Link to='/'> Route</Link>
        <Link to='/register'>
          <button> SignIn</button>
        </Link>
      </Links>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 4rem;
  text-align: center;
  align-items: center;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  top: 0;

  * {
    font-size: 18px;
    text-align: center;
    align-items: center;
  }
`
const Logo = styled.img`
  max-width: 50px;
  border-radius: 50%;
`
const Links = styled.div`
  a {
    text-decoration: none;
    color: black;
    margin: 0 0.5rem;
    transition: 0.1s ease-in-out;
  }

  button {
    border-radius: 50px;
    padding: 7px 15px;
    border: none;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    background-color: rgb(209, 209, 209);
  }

  button:hover {
    background-color: black;
    color: white;
  }
`
