import React from 'react'
import './SubscribeToNewsletter.css'
import { SocialIcon } from 'react-social-icons'

const SubscribeToNewsletter = () => {
  return (
    <>
      <div className='newsletter-container'>
        <img
          src='/images/Graphic_Elements.png'
          alt='Graphic_Elements'
          className='graphicImg'
        />
        <div className='newsletter-content'>
          <div className='newsletter-inner'>
            <p className='pinkHeader'>subscribe to our newsletter</p>
            <p className='newsletter-title'>
              Prepare yourself & let’s explore the beauty of the world
            </p>

            <div className='email-container'>
              <div className='d-flex align-items-center'>
                <SocialIcon url='www.email.com' className='email-icon' />
                <p className='email-text'>Your Email</p>
              </div>
              <button className='violetBtn'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <img src='/images/side.png' alt='side' className='sideImg' />
    </>
  )
}

export default SubscribeToNewsletter
