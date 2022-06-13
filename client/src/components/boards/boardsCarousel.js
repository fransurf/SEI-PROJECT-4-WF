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

        setBoards(data)

      } catch (error) {
        console.log('🥺 error getting your board data 🥺', error)
        setErrors(true)
      }
    }

    getBoards()
  }, [])


  return (
    <Container className='boards-page-container'>
      <h1 className='glitch' data-text="Welcome to Women that Shred">THIS WILL BE THE BOARDS CAROUSEL</h1>
      <div className='scanlines'></div>
      <Row className='justify-contents-center'>
        {boards.map(board => {
          const { id, make, model, price, description, link } = board
          return (
            <Col key={id} md='6' lg='4' className='board'>
              {/* Put a link to singular board here? */}
              <Card>
                <Card.Img className='board-img' variant="left" src="URL" />
                <Card.Body>
                  <Card.Title>{make} - {model}</Card.Title>
                  {/* <Card.Title className='glow'>{make} - {model}</Card.Title>
                  <div className='scanlines'></div> */}
                  <Card.Text>£{price}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>{link}</Card.Text>
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