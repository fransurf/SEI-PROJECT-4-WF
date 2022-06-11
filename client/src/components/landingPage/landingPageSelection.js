import React from 'react'
import Container from 'react-bootstrap/Container'
// import { Link } from 'react-router-dom'


const LandingPageSelection = () => {
  return (
    <Container className='selection-page-container'>
      <section className='boards-selection'>
        <div id='piste'>
          <img src='piste-board-url' alt='piste bashers selection' />
          <h2>Pister bashers</h2>
        </div>
        <div id='powder'>
          <img src='powder-board-url' alt='powder days selection' />
          <h2>Powder days</h2>
        </div>
        <div id='park'>
          <img src='park-board-url' alt='park selection' />
          <h2>Park</h2>
        </div>
        <div id='all-mountain'>
          <img src='all-mountain-board-url' alt='all mountain selection' />
          <h2>All mountain</h2>
        </div>
        <div id='all'>
          <img src='all-board-url' alt='all boards selection' />
          <h2>Cant decide - show me them all</h2>
        </div>
      </section>
      <img className='landing-img' src='../../assets/general/bwPhoto.jpeg' alt='female boarder photo' />
    </Container>

  )
}

export default LandingPageSelection