import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

const BoardsTerrain = () => {


  const [terrains, setTerrains] = useState([])
  const [errors, setErrors] = useState(false)
  const { type } = useParams()
  const LR = ['right', 'left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'left', 'right', 'left']

  // console.log('type from params ->', type)

  useEffect(() => {
    const getTerrain = async () => {
      try {
        const { data } = await axios.get(`/api/terrain/${type}/`)
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
      {/* IMAGES FOR THE TERRAIN PARALLAX BACKGROUND */}
      <div className='terrain-parallax'>
        <div className='terrain-img' id={`img-${type}-left`}></div>
      </div>
      <h1 className='page-title'> {type} boards</h1>
      {/* Link to advice page */}
      <Link to='/boards/advice' className='link'>Need some advice?</Link>

      <Container className='boards-container'>
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
                    <a href={link} className='link' id='tempted' target='blank'>TEMPTED??</a>
                  </div>
                  {/* eslint-disable-next-line camelcase */}
                  <img className={`board-img board-img-${LR[i]}`} src={require(`../../assets/boards/${board_img}.jpeg`)} alt={`image of ${make} - ${model}`} />
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