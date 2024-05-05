import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container-fluid p-2' style={{ height: '30%' }}>
        <div
          className='row'
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'stretch',
            height: '100%',
          }}
        >
          <div className='col-2 d-flex flex-column align-items-center'>
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
              <img src='/images/fb.png' alt='FB' />
              <img src='/images/x.png' alt='X' />
              <img src='/images/insta.png' alt='insta' />
            </div>
          </div>
          <div className='col-2 d-flex flex-column align-items-center'>
            <h3>Company</h3>
            <p className='footerItems'>About</p>
            <p className='footerItems'>Career</p>
            <p className='footerItems'>Mobile</p>
          </div>
          <div className='col-2 d-flex flex-column align-items-center'>
            <h3>Contact</h3>
            <p className='footerItems'>Why Travlog?</p>
            <p className='footerItems'>Partner with us</p>
            <p className='footerItems'>FAQ's</p>
            <p className='footerItems'>Blog</p>
          </div>
          <div className='col-2 d-flex flex-column align-items-center'>
            <h3>Meet Us</h3>
            <p className='footerItems'>+00 92 123456789</p>
            <p className='footerItems'>info@travlog.com</p>
            <p className='footerItems' style={{ width: '65%' }}>
              205. R Street, New York BD23200
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
