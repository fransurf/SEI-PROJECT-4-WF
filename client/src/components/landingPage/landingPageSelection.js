import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

import HomeImage from '../../assets/general/bwPhoto.jpeg'


const LandingPageSelection = () => {

  const [terrains, setTerrains] = useState([])
  const [errors, setErrors] = useState(false)

  const slogans = ['', '', 'All mountain', 'Powder days', 'Piste bashers', 'Park life', 'It\' not all about the pros']

  useEffect(() => {
    const getTerrains = async () => {
      try {
        const { data } = await axios.get('/api/terrain/')
        console.log('Got the terrain data -> 👊🏼', data)

        setTerrains(data)
      } catch (error) {
        console.log('🧐 Here are your terrain errors')
        setErrors(true)
      }
    }

    getTerrains()

  }, [])




  return (
    <Container className='landing-page-container'>
      <section className='boards-selection'>
        {terrains.map(terrain => {
          const { id, type } = terrain
          return (
            <>
              <Col key={id} className='board'>
                <Link to={`/boards/${type}`}>
                  <div className='board-selector selection animate' id={`${type}`}>
                    <h2 className='selector-text' id={`${type}-text`}>{`${slogans[`${id}`]}`} {'   >>>'}</h2>
                  </div>
                </Link>
              </Col>

              <Link to='/boards'>
                <div className='board-selector selection animate' id='all'>
                  <h2 className='selector-text'>Show me them all {'   >>>'}</h2>
                </div>
              </Link>
            </>
          )
        })}

      </section>
      <img className='landing-img' src={HomeImage} alt='female boarder photo' />
    </Container>

  )
}

export default LandingPageSelection