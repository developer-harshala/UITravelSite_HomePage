import React from 'react'
import Navbar from './Navbar'
import styles from '../public/CSS/styles.module.css'

const Header = () => {
  return (
    <div
      className={`container ${styles.fadeInAnimation}`}
      style={{ padding: '12px' }}
    >
      <div className='row align-items-center'>
        <div
          className={`col-lg-2 col-md-3 col-sm-4 col-6 ${styles.fadeInAnimation}`}
        >
          <img
            src='/images/Frame 1.png'
            alt='Logo'
            className={styles.scaleButtonAnimation}
            style={{ padding: '10px', maxWidth: '100%' }}
          />
        </div>
        <div
          className={`col-lg-6 col-md-5 col-sm-4 col-6 ${styles.fadeInAnimation}`}
        >
          <Navbar />
        </div>
        <div
          className={`col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-between mt-2 ${styles.fadeInAnimation}`}
        >
          <button
            className={`btn ${styles.scaleButtonAnimation}`}
            style={{
              width: '45%',
              height: '100%',
              padding: '8px',
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: '600',
            }}
          >
            Log in
          </button>
          <button className={`violetBtn ${styles.scaleButtonAnimation}`}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
