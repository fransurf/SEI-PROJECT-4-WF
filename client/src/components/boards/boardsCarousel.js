import { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const BoardsCarousel = () => {

  const [boards, setBoards] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getBoards = async () => {
      try {
        const { data } = await axios.get('/api/boards/') 
        console.log('🏆 Got the boards data!', data)
        console.log('🏆 Got the terrain data??', data.terrain)

        setBoards(data)

      } catch (error) {
        console.log('🥺 error getting your board data 🥺', error)
        setErrors(true)
      }
    }

    getBoards()

    console.log('boards ->', boards)


  }, [])


  return (
    <Container className='boards-page-container'>
      <h1 className='glitch' data-text="Welcome to Women that Shred">THIS WILL BE THE BOARDS CAROUSEL</h1>
      <div className='scanlines'></div>
      <Row className='justify-contents-center'>
        {boards.map(board => {
          // eslint-disable-next-line camelcase
          const { id, make, model, price, description, board_img, terrain } = board
          // CREATE AN ARRAY OF TERRAIN TYPES FROM THE TERRAIN OBJECT
          const terrainType = terrain.map(t => t.type)
          // console.log('TERRAIN ARRAY?? ----->', terrainType)
          return (
            <Col key={id} md='6' lg='4' className='board'>
              {/* Put a link to singular board here? */}
              <Card>
                {/* eslint-disable-next-line camelcase */}
                <Card.Img className='board-img' variant="left" src={board_img} />
                <Card.Body>
                  <Card.Title>{make} - {model}</Card.Title>
                  {/* <Card.Title className='glow'>{make} - {model}</Card.Title>
                  <div className='scanlines'></div> */}
                  <Card.Text>£{price}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Title>{terrainType.join(', ')}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default BoardsCarousel