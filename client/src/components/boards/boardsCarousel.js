import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

// React-slick-carousel imports

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LeftArrow from '../../assets/arrow-pinkLeft.png'
import RightArrow from '../../assets/arrow-pinkRight.png'

const BoardsCarousel = () => {

  const [boards, setBoards] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getBoards = async () => {
      try {
        const { data } = await axios.get('/api/boards/')
        // console.log('🏆 Got the boards data!', data)
        // console.log('🏆 Got the terrain data??', data.terrain)

        setBoards(data)

      } catch (error) {
        console.log('🥺 error getting your board data 🥺', error)
        setErrors(true)
      }
    }

    getBoards()

    console.log('boards ->', boards)


  }, [])

  // * FOR CAROUSEL

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  )

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  )

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    speed: 800,
    useCSS: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    // initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  }


  return (
    <Container id='boards-page-container'>
      <div className='bg'></div>
      <h1>GIVE ME THEM ALL!!!</h1>
      {/* Link to advice page */}
      <Link to='/boards/advice' className='link'>Need some advice?</Link>

      {/* <Row className='justify-contents-center'> */}
      <Slider {...settings} className='slider'>

        {/* Map through boards array to return each board in database */}
        {boards.map(board => {
          // eslint-disable-next-line camelcase
          const { id, make, model, price, description, board_img, terrain } = board
          // CREATE AN ARRAY OF TERRAIN TYPES FROM THE TERRAIN OBJECT
          const terrainType = terrain.map(t => t.type)
          // console.log('TERRAIN ARRAY?? ----->', terrainType)
          return (
            <div key={id} className='card'>
              <div className='card-img'>
                {/* eslint-disable-next-line camelcase */}
                <img className='board-img' src={require(`../../assets/boards/${board_img}.jpeg`)} />
              </div>
              <div className='right' >
                <div></div>

                <div className='card-body'>
                  <h2 className='card-title'>{make} - {model}</h2>

                  <h3 >£{price}</h3>
                  <p>{description}</p>

                  {/* ?? Map through terrain array to produce links to terrain pages */}
                  <div id='terrain-links'>
                    {terrainType.map((type) => {
                      return (
                        <a href={`/boards/${type}`} key={type} className='link carousel-link'>{type}</a>
                      )
                    })}
                  </div>

                </div>
              </div>

            </div>


          )
        })}
      </Slider>

      {/* </Row> */}
    </Container>
  )
}

export default BoardsCarousel