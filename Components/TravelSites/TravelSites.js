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
            src='/images/tripadvisor.png'
            alt='tripadvisor'
            className='img-fluid pt-2'
          />
          <img src='/images/expedia.png' alt='expedia' className='img-fluid' />
          <img
            src='/images/booking.com.png'
            alt='booking.com'
            className='img-fluid pt-2'
          />
          <img src='/images/airbnb.png' alt='airbnb' className='img-fluid' />
          <img
            src='/images/rbitz.png'
            alt='rbitz'
            className='img-fluid pt-2'
            style={{ marginRight: '10rem' }}
          />
        </div>
      </div>
    </div>
  )
}

export default TravelSites
