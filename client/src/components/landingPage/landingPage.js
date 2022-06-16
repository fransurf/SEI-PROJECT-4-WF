import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <Container className='landing-page-container'>
      <div className='landing-text'>
        <div className='glitch-container'>
          <h1 className='glitch' data-text="For Women that Shred">For Women that Shred</h1>
          <h1 className='glow'>For Women that Shred</h1>
          <div className='scanlines'></div>
        </div>
      </div>
      <Link to='/selection' id='selection-link'>
        <img className='arrows-down' src='../../assets/general/arrows-down1.png' />
      </Link>
      <img className='landing-img' src='../../assets/general/bwPhoto.jpeg' alt='female boarder photo' />
    </Container>

  )
}

export default LandingPage