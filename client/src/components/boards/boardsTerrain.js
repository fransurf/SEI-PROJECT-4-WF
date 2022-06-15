import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'



const BoardsTerrain = () => {


  const [terrains, setTerrains] = useState([])
  const [errors, setErrors] = useState(false)
  const { type, id } = useParams()
  const LR = ['left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'left', 'right']

  // console.log('type from params ->', type)

  useEffect(() => {
    const getTerrain = async () => {
      try {
        const { data } = await axios.get(`/api/terrain/${type}`)
        console.log('Got the terrain data -> 👊🏼', data)
        console.log('Got the terrain data.boards -> 👊🏼', data.boards)

        // const boardsTerrain = data.boards

        setTerrains(data.boards)


      } catch (error) {
        console.log('🧐 Here are your terrain errors')
        setErrors(true)
      }
    }
    getTerrain()

    console.log('terrains ->', terrains)

  }, [])

  return (

    <Container className='terrain-page-container'>
      <h1> {type} boards</h1>

      <Row>
        {terrains.map(board => {
          const { id, make, model, price, description, link } = board
          return (
            <>
              <section key={id} className={`section section-${LR[`${id}`]}`}>
                <img className={`terrain-img img-${LR[`${id}`]}`} src={`../../assets/terrain/${type}-${LR[`${id}`]}.jpeg`} alt='female boarder photo' />
                <div className={`board-details deets-${LR[`${id}`]}`}>
                  <div className={`text-${LR[`${id}`]}`}>
                    <h2>{make} - {model}</h2>
                    <h3>PRICE: £{price}</h3>
                    <p>{description}</p>
                    <a href={link}>TEMPTED?? &gt;&gt;&gt;</a>
                  </div>
                  <img className={`board-img board-img-${LR[`${id}`]}`} src={`../../assets/${type}/${model}.jpeg`} alt={`image of ${make} - ${model}`}/>
                </div>
              </section>
            </>
          )
        })}
      </Row>



    </Container >

  )

}

export default BoardsTerrain