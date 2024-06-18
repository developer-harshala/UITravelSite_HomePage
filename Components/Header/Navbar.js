'use client'
import React from 'react'
import Link from 'next/link'
import './styles.css'

const Navbar = () => {
  return (
    <>
      <div>
        <div className='d-flex justify-content-evenly navbar-links'>
          <Link
            href='/'
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Home
          </Link>
          <Link
            href='/discover'
            style={{
              fontSize: '1rem',
              color: 'rgba(25, 24, 37, 0.5)',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Discover
          </Link>
          <Link
            href='/special-deals'
            style={{
              fontSize: '1rem',
              color: 'rgba(25, 24, 37, 0.5)',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Special Deals
          </Link>
          <Link
            href='/contact'
            style={{
              fontSize: '1rem',
              color: 'rgba(25, 24, 37, 0.5)',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
