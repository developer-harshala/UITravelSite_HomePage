'use client'
import React from 'react'
import Navbar from './Navbar'
import './styles.css'

const Header = () => {
  return (
    <div className='container fadeInAnimation'>
      <div className='row align-items-center'>
        <div className='col-lg-2 col-md-3 col-sm-4 col-6 fadeInAnimation'>
          <img
            src='/images/Frame 1.png'
            alt='Logo'
            className='scaleButtonAnimation'
            style={{ padding: '10px', maxWidth: '100%' }}
          />
        </div>
        <div className='col-lg-8 col-md-5 col-sm-4 col-6 fadeInAnimation'>
          <Navbar />
        </div>
        <div className='col-lg-2 col-md-4 col-sm-4 col-12 d-flex justify-content-end align-items-center fadeInAnimation'>
          <button className='btn scaleButtonAnimation'>Log in</button>
          <button className='signUpBtn scaleButtonAnimation'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
