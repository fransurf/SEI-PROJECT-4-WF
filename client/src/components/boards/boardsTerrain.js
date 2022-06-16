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
  const { type } = useParams()
  const LR = ['right', 'left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'left']

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
      <Container className='boards-container'>
        {/* IMAGES FOR THE TERRAIN PARALLAX BACKGROUND */}
        <div className='terrain-parallax'>
          <div className='terrain-img' id={`img-${type}-left`}></div>
          <div className='terrain-img' id={`img-${type}-right`}></div>
        </div>

        {terrains.map((board, i) => {
          // eslint-disable-next-line camelcase
          const { id, make, model, price, description, link, board_img } = board
          // const index = i
          // console.log('Has the index really worked?? --->', i)

          return (
            <>
              <section className='separator'></section>
              <section key={id} className={`section section-${LR[i]}`}  >
                <div className={`board-details deets-${LR[i]}`} id={`section-${type}-${LR[i]}`}>
                  <div className={`text-${LR[i]}`}>
                    <h2>{make} - {model}</h2>
                    <h3>PRICE: £{price}</h3>
                    <p>{description}</p>
                    <a href={link} target='blank'>TEMPTED?? &gt;&gt;&gt;</a>
                  </div>
                  {/* eslint-disable-next-line camelcase */}
                  <img className={`board-img board-img-${LR[i]}`} src={`../../assets/boards/${board_img}.jpeg`} alt={`image of ${make} - ${model}`} />
                </div>
              </section>
            </>
          )
        })}
      </Container>
    </Container >

  )

}

export default BoardsTerrain