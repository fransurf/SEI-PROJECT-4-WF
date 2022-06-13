import React from 'react'
import Container from 'react-bootstrap/Container'
// import { Link } from 'react-router-dom'


const LandingPageSelection = () => {
  return (
    <Container className='landing-page-container'>
      <section className='boards-selection'>
        <div className='board-selector' id='piste'>
          {/* <img src='piste-board-url' alt='piste bashers selection' /> */}
          <h2 className='selector-text' >Pister bashers {'   >>>'}</h2>
        </div>
        <div className='board-selector' id='powder'>
          {/* <img src='powder-board-url' alt='powder days selection' /> */}
          <h2 className='selector-text'>Powder days {'   >>>'}</h2>
        </div>
        <div className='board-selector' id='park'>
          {/* <img src='park-board-url' alt='park selection' /> */}
          <h2 className='selector-text'>Park {'   >>>'}</h2> 
        </div>
        <div className='board-selector' id='all-mountain'>
          {/* <img src='all-mountain-board-url' alt='all mountain selection' /> */}
          <h2 className='selector-text'>All mountain {'   >>>'}</h2>
        </div>
        <div className='board-selector' id='beginner'>
          {/* <img src='beginner' alt='beginner selection' /> */}
          <h2 className='selector-text'>Its not all about the pros {'   >>>'}</h2>
        </div>
        <div className='board-selector' id='all'>
          {/* <img src='all-board-url' alt='all boards selection' /> */}
          <h2 className='selector-text'>Show me them all {'   >>>'}</h2>
        </div>
      </section>
      <img className='landing-img' src='../../assets/general/bwPhoto.jpeg' alt='female boarder photo' />
    </Container>

  )
}

export default LandingPageSelection