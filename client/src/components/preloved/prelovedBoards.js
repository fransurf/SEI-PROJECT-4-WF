import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { userIsAuthenticated, getTokenFromLocalStorage } from '../helpers/auth'


const PrelovedBoards = () => {

  const navigate = useNavigate()

  const [preloved, setPreloved] = useState([])
  const [errors, setErrors] = useState([false])

  useEffect(() => {

    !userIsAuthenticated && navigate('/api/login/')

    const getPreloved = async () => {
      try {
        const token = getTokenFromLocalStorage()

        const { data } = await axios.get('/api/preloved/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('preloved data --> ', data)
        setPreloved(data)

      } catch (error) {
        console.log('preloved error --->', error)
        setErrors(true)
      }
    }
    getPreloved()
  }, [navigate])



  return (
    < Container className='terrain-page-container preloved-page-container' >

      {userIsAuthenticated() ?
        <>
          <h1 className='preloved-title'>Preloved boards wanting new owners</h1>
          <Link to='/preloved/add' className='link' >Got a board to sell?</Link>

          <Row className='flex'>
            {preloved.map(board => {
              {/* eslint-disable-next-line camelcase */ }
              const { id, board_img, make, model, description, price, owner } = board
              console.log('owner--->', owner.email)
              return (
                <Col key={id} md='6' lg='4'  >
                  <Card>
                    {/* eslint-disable-next-line camelcase */}
                    {/* <Card.Img className='preloved-img' variant='left' src={require(`../../assets/preloved/${board_img}.jpeg`)} /> */}
                    <Card.Body className='card-body'>
                      <Card.Title className='title mb-0' >{make} - {model}</Card.Title>
                      <Card.Title className='title mb-0' >{`£${price}`}</Card.Title>
                      <Card.Text className='description'>{description}</Card.Text>
                      <Card.Text className='description'><span>INTERESTED? </span>{`Contact the owner -> ${owner.username} (${owner.email})`}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              )
            })}
          </Row>
        </>


        :
        <>
          <Link to="/login" id='no-access' alt='Login'>🚨 Only members can access the preloved boards pages 🚨</Link>
        </>

      }
    </Container >



  )
}

export default PrelovedBoards
