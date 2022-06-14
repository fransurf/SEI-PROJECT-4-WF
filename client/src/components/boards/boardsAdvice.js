import React from 'react'

import Container from 'react-bootstrap/Container'

const BoardsAdvice = () => {

  return (
    <Container id='advice-page-container'>
      <h1>PICKING YOUR PERFECT BOARD</h1>
      <h2>Its more than just colour schemes</h2>
      <section id='advice'>
        <img id='advice-img' src='../../assets/general/boardFlex.jpeg' alt='girl on flex board photo' />
        <div id='advice-divs'>
          <div className='board-selector animate expand' id='flex'>
            <h2 className='selector-text'>
              <span className='short-text' >{'<<< Flex >>>'} </span>
              <span className='long-text'>{'<<< Flex >>>'} br/ The stiffness of a snowboard has a huge effect on its riding characteristics, and as such all brands will give a flex rating, usually between one and ten. </span>
            </h2>
          </div>
          <div className='board-selector animate' id='size'>
            <h2 className='selector-text'>{'<<< Size >>>'} </h2>
          </div>
          <div className='board-selector animate' id='rocker'>
            <h2 className='selector-text'>{'<<< Camber vs Rocker >>>'} </h2>
          </div>
          <div className='board-selector animate' id='shape'>
            <h2 className='selector-text'>{'<<< Shape >>>'} </h2>
          </div>
          <div className='board-selector animate' id='gender'>
            <h2 className='selector-text'>{'<<< Female vs Unisex >>>'} </h2>
          </div>
        </div>
      </section>

    </Container>


  )
}

export default BoardsAdvice