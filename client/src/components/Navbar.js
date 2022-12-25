import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='/logo.png' alt='logo' className='navbar-logo' />
      </div>
      <div className='navbar-right'>
        <button className='menu-button' onClick={toggleMenu}>
          Menu
        </button>
        <NavLink
          to='/'
          exact
          className={`navbar-link${menuOpen ? ' show' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to='/patients'
          className={`navbar-link${menuOpen ? ' show' : ''}`}
        >
          Patients
        </NavLink>
        <NavLink
          to='/doctors'
          className={`navbar-link${menuOpen ? ' show' : ''}`}
        >
          Doctors
        </NavLink>
        <NavLink
          to='/organisers'
          className={`navbar-link${menuOpen ? ' show' : ''}`}
        >
          Organisers
        </NavLink>
        <div className='appointment-buttons'>
          <button className='appointment-button'>Appointment</button>
          <button className='appointment-button'>SignIn</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
