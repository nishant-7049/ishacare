import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Contain>
      <Nav>
        <Logo src='/images/nav-logo.png' alt='img' />
        <Links>
          <Link to='/'> Home</Link>
          <Link to='/'> Services</Link>
          <Link to='/'> Blogs</Link>
          <Link to='/'> About</Link>
          <Link to='/register'>
            <button>SignIn</button>
          </Link>
        </Links>
      </Nav>
    </Contain>
  )
}

export default Navbar

const Contain = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  align-items: center;


  top: 0;

  * {
    font-size: 18px;
    text-align: center;
    align-items: center;
  }
`
const Logo = styled.img`
  max-width: 70px;
  border-radius: 50%;
`
const Links = styled.div`
  a {
    text-decoration: none;
    color: black;
    margin: 0 1rem;
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
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
`
