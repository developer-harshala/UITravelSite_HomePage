import React from 'react'

const SubscribeToNewsletter = () => {
  return (
    <>
      <div className='newsletter-container' style={{ padding: '1rem' }}>
        <img
          src='/images/Graphic_Elements.png'
          alt='Graphic_Elements'
          className='graphicImg'
        />
        <div className='newsletter-content'>
          <div
            className='newsletter-inner'
            style={{
              backgroundColor: 'rgba(250, 205, 73, 0.08)',
              paddingLeft: '20px',
              height: '410px',
            }}
          >
            <p
              className='pinkHeader'
              style={{
                paddingTop: '3rem',
                fontWeight: '600',
                fontSize: '26px',
              }}
            >
              subscribe to our newsletter
            </p>
            <p
              style={{
                color: '#191825',
                fontSize: '4.4rem',
                fontWeight: '600',
              }}
            >
              Prepare yourself & let’s explore the beauty of the world
            </p>

            <div className='d-flex justify-content-around'>
              <div className='d-flex'>
                <img
                  src='/images/message 1.png'
                  alt='msg'
                  className=''
                  style={{ height: '2rem', marginRight: '10px' }}
                />
                <p
                  style={{
                    color: 'rgba(25, 24, 37, 0.75)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  Your Email
                </p>
              </div>
              <button
                className='violetBtn'
                style={{ width: '12%', height: '56px' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src='/images/side.png' alt='side' className='sideImg' />
    </>
  )
}

export default SubscribeToNewsletter
