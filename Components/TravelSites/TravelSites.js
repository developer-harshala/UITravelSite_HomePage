import React from 'react'
import './TravelSites.css'

const TravelSites = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center' style={{ paddingTop: '3%' }}>
        <div className='col-12 d-flex justify-content-between align-items-center'>
          <img
            src='/images/OBJECTS.png'
            alt='OBJECTS'
            className='img-fluid1'
            style={{ alignSelf: 'flex-start', width: '3%' }}
          />
          <img
            src='/images/tripadvisor1.png'
            alt='tripadvisor'
            className='img-fluid pt-2'
            style={{ width: '18%' }}
          />
          <img
            src='/images/expedia1.png'
            alt='expedia'
            className='img-fluid'
            style={{ width: '18%' }}
          />
          <img
            src='/images/booking1.jpg'
            alt='booking.com'
            className='img-fluid pt-2'
            style={{ width: '18%' }}
          />
          <img
            src='/images/airbnb1.png'
            alt='airbnb'
            className='img-fluid'
            style={{ width: '18%' }}
          />
          <img
            src='/images/orbitz1.png'
            alt='rbitz'
            className='img-fluid pt-2'
            style={{ width: '18%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default TravelSites
