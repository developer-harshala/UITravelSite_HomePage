import React from 'react'

const TravelPoint = () => {
  const infoCards = [
    {
      count: '500+',
      title: 'Holiday Package',
    },
    {
      count: '100',
      title: 'Luxury Hotel',
    },
    {
      count: '7',
      title: 'Premium Airlines',
    },
    {
      count: '2k+',
      title: 'Happy Customer',
    },
  ]
  return (
    <>
      <div
        className='container-fluid'
        style={{
          paddingTop: '3%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src='/images/Group 9238.png'
          alt='img'
          style={{
            width: '60%',
            height: 'auto',
            objectFit: 'cover',
            marginLeft: '-5vw',
          }}
        />
        <div
          className='travelInfo'
          style={{ width: '40%', paddingLeft: '4rem' }}
        >
          <div style={{ width: '73%' }}>
            <p className='pinkHeader'>Travel Point</p>
            <p
              style={{
                fontSize: '2.3rem',
                fontWeight: '700',
                color: '#191825',
              }}
            >
              We helping you find your dream location
            </p>
            <p
              style={{
                color: 'rgba(25, 24, 37, 0.5)',
                fontSize: '17px',
                fontWeight: '500',
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div
              className='card-container'
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                marginLeft: '-3rem',
                position: 'relative',
              }}
            >
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className='card text-center'
                  style={{
                    width: '35%',
                    marginBottom: '1rem',
                    border: '1px solid rgba(25, 24, 37, 0.1)',
                    padding: '10px',
                    height: '100px',
                  }}
                >
                  <div className='card-body'>
                    <h5 className='card-title'>{card.count}</h5>
                    <p className='card-text'>{card.title}</p>
                  </div>
                </div>
              ))}
              <img
                src='/images/Frame 50.png'
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '2rem',
                  borderRadius: '50%',
                  height: '20%',
                }}
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TravelPoint
