import React from 'react'
// import experiencePhoto1 from '../../../assets/images/main/Experience/proyecto1-1.png'
// import experiencePhoto2 from '../../../assets/images/main/Experience/proyecto2-1.png'
// import experiencePhoto3 from '../../../assets/images/main/Experience/Proyecto3-1.png'

const src = 'hola'
function Carousel () {
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='true'>
        <div className='carousel-indicators'>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1' />
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2' />
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3' />
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={src} className='' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={src} className='' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={src} className='' alt='...' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export { Carousel }
