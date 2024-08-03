import React from 'react'
import './MainContent.css'

const MainContent = () => {
  return (
    <>
      <div className='container-fluid'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingTop: '3%',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px',
                border: '1px solid rgba(248, 94, 159, 0.5)',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
              }}
            >
              <span style={{ color: 'rgba(248, 94, 159, 1)' }}>
                Explore the world!
              </span>
              <img src='/images/work 1.png' alt='OBJECTS' />
            </div>
            <p
              className='main-heading'
              style={{
                fontSize: '80px',
                fontWeight: '700',
                width: '523px',
                lineHeight: '82.8px',
              }}
            >
              Travel{' '}
              <span style={{ color: 'rgba(248, 94, 159, 1)' }}>
                top destination
              </span>{' '}
              of the world
            </p>
            <p
              className='sub-heading'
              style={{
                color: 'rgba(25, 24, 37, 0.5)',
                fontSize: '18px',
                fontWeight: '500',
                width: '428px',
              }}
            >
              We always make our customer happy by providing as many choices as
              possible
            </p>
            <div className='button-container'>
              <button
                className='violetBtn'
                style={{ width: '25%', height: '10%', marginRight: '1rem' }}
              >
                Get Started
              </button>
              <button className='watchBtn'>
                <img src='/images/play-circle.png' alt='play icon' />
                Watch Demo
              </button>
            </div>
          </div>
          <div
            className='image-container'
            style={{
              display: 'flex',
              backgroundImage: 'url("/images/layer.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '8rem',
                position: 'relative',
              }}
            >
              <img
                className='rectangle-image'
                src='/images/Rectangle 1.png'
                alt='Rectangle 1'
                style={{ width: '82%', height: '48%' }}
              />
              <img
                src='/images/Frame 16.png'
                alt='img'
                style={{
                  height: '10%',
                  width: '15%',
                  position: 'absolute',
                  bottom: '49%',
                  left: '6.2rem',
                  borderRadius: '50%',
                }}
              />
              <img
                className='rectangle-image'
                src='/images/Rectangle 2.png'
                alt='Rectangle 2'
                style={{ width: '82%', height: '48%', paddingTop: '7%' }}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <img
                className='rectangle-image'
                src='/images/Rectangle 3.png'
                alt='Rectangle 3'
                style={{ width: '78%', paddingTop: '4rem' }}
              />
              <div
                style={{ position: 'absolute', bottom: '35%', right: '1px' }}
              >
                <button className='watchBtn' style={{ width: '100%' }}>
                  <img src='/images/location 1.png' alt='location' />
                  Top Places
                </button>
              </div>
              <img
                src='/images/Frame 17.png'
                alt='img'
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '4rem',
                  borderRadius: '50%',
                  height: '10%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
