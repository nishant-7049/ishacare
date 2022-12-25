import React from 'react'

const footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <p className='footer-text'>Copyright 2021</p>
          <p className='footer-text'>All Rights Reserved</p>
        </div>
        <div className='footer-right'>
          <a href='#' className='footer-link'>
            Contact
          </a>
          <a href='#' className='footer-link'>
            Privacy Policy
          </a>
          <a href='#' className='footer-link'>
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  )
}

export default footer
