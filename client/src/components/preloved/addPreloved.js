import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// Import helpers
import { getTokenFromLocalStorage } from '../helpers/auth'
const AddPreloved = () => {
  // Navigate
  const navigate = useNavigate()
  // ? State
  // Form data passed by user
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    board_img: '',
    price: '',
    description: '',
  })
  const [errors, setErrors] = useState({})
  // * Update formData when typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }
  // * Submit form data on submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/preloved/', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/preloved/')
    } catch (error) {
      console.log('preloved add error --->', error)
      console.log('preloved add error response --->', error.response.data.errors)
      setErrors(error.response.data.errors)
    }
  }
  return (
    <section className='form-page'>
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>
            <h1>Preloved board for sale?</h1>
            
            {/* Make */}
            <label className='label' htmlFor="make">Make</label>
            <input type="text" name="make" className='input' placeholder='Make' value={formData.make} onChange={handleChange} />
            {errors.make && <p className='text-danger'>{errors.make}</p>}
            {/* Model */}
            <label className='label' htmlFor="model">Model</label>
            <input type="text" name="model" className='input' placeholder='Model' value={formData.model} onChange={handleChange} />
            {errors.model && <p className='text-danger'>{errors.model}</p>}
            {/* Image */}
            <label className='label' htmlFor="board_img">Board pic</label>
            <input type="text" name="board_img" className='input' placeholder='Image url' value={formData.board_img} onChange={handleChange} />
            {errors.board_img && <p className='text-danger'>{errors.board_img}</p>}
            {/* Price */}
            <label className='label' htmlFor="price">How much are you asking?</label>
            <input type="number" name="price" className='input' placeholder='Price' value={formData.price} onChange={handleChange} />
            {errors.price && <p className='text-danger'>{errors.price}</p>}
            {/* Description */}
            <label className='label' htmlFor="description">Briefly describe the board and its condition</label>
            <textarea name="description" className='input description' placeholder='Briefly describe your board, its age and condition' value={formData.description} onChange={handleChange} />
            {errors.description && <p className='text-danger'>{errors.description}</p>}
            {/* Submit */}
            <button type="submit" className="button w-100">Add my board</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}
export default AddPreloved