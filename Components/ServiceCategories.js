import { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../public/CSS/Slider.css'

export default function Carousel() {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderSettings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    swipeToSlide: true,
    touchThreshold: 10,
    speed: 500,
  }

  const handleAfterChange = (index) => {
    setCurrentSlide(index)
  }

  const hotelCards = [
    {
      title: 'Best Tour Guide',
      description:
        'What looked like a small patch of purple grass, above five feet.',
      image: '/images/destination 1.png',
    },
    {
      title: 'Easy Booking',
      description: 'Square, was moving across the sand in their direction.',
      image: '/images/booking 1.png',
    },
    {
      title: 'Best Tour Guide',
      description:
        'What looked like a small patch of purple grass, above five feet.',
      image: '/images/destination 1.png',
    },
    {
      title: 'Easy Booking',
      description: 'Square, was moving across the sand in their direction.',
      image: '/images/booking 1.png',
    },
    {
      title: 'Best Tour Guide',
      description:
        'What looked like a small patch of purple grass, above five feet.',
      image: '/images/destination 1.png',
    },
    {
      title: 'Easy Booking',
      description: 'Square, was moving across the sand in their direction.',
      image: '/images/booking 1.png',
    },

    // Add more card data as needed
  ]

  return (
    <div className='container'>
      <div
        className='content'
        style={{ paddingLeft: '20px', paddingRight: '20px' }}
      >
        <div className='row' style={{ paddingTop: '5%' }}>
          <div className='col-4'>
            <div className='left-side'>
              <p className='pinkHeader' style={{ fontWeight: '500' }}>
                Services
              </p>
              <p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '600',
                  color: '#191825',
                }}
              >
                Our top value categories for you
              </p>
            </div>
          </div>
          <div className='col-8'>
            <div className='slider-container' style={{ height: '18rem' }}>
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                afterChange={handleAfterChange}
              >
                {hotelCards.map((card, index) => (
                  <div key={index} className='card-container'>
                    <div className='card text-center'>
                      <img
                        src={card.image}
                        className='card-img-top mx-auto mt-3'
                        alt={`card${index + 1}`}
                        style={{ height: '4rem', width: '4rem' }}
                      />
                      <div className='card-body'>
                        <h5 className='card-title'>{card.title}</h5>
                        <p
                          className='card-text'
                          style={{
                            padding: '1.2rem',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'normal',
                            transition: 'background-color 0.3s ease-in-out',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.2)'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)'
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
