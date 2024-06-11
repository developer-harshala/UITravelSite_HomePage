import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div
      className='container-fluid p-2 footer-container'
      style={{ height: '30%' }}
    >
      <div
        className='row footer-row'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'stretch',
          height: '100%',
        }}
      >
        <div className='col-2 d-flex flex-column align-items-center footer-column'>
          <img
            src='/images/Frame 1.png'
            style={{ width: '90%', height: '35%' }}
            alt='Logo'
          />
          <p
            className=''
            style={{
              color: '#19182580',
              fontWeight: '900',
              fontSize: '20px',
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className='image-container'>
            <SocialIcon url='www.facebook.com' className='social-icon' />
            <SocialIcon url='www.twitter.com' className='social-icon' />
            <SocialIcon url='www.instagram.com' className='social-icon' />
          </div>
        </div>
        <div className='col-2 d-flex flex-column align-items-center footer-column'>
          <h3>Company</h3>
          <p className='footerItems'>About</p>
          <p className='footerItems'>Career</p>
          <p className='footerItems'>Mobile</p>
        </div>
        <div className='col-2 d-flex flex-column align-items-center footer-column'>
          <h3>Contact</h3>
          <p className='footerItems'>Why Travlog?</p>
          <p className='footerItems'>Partner with us</p>
          <p className='footerItems'>FAQ's</p>
          <p className='footerItems'>Blog</p>
        </div>
        <div className='col-2 d-flex flex-column align-items-center footer-column'>
          <h3>Meet Us</h3>
          <p className='footerItems'>+00 92 123456789</p>
          <p className='footerItems'>info@travlog.com</p>
          <p className='footerItems' style={{ width: '65%' }}>
            205. R Street, New York BD23200
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
