import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'



const Login = () => {
  // Navigate
  const navigate = useNavigate()

  // * Update form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)
  
  
  // * Save token to local storage
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('women-that-shred', token)
  }
  
  // * State tracking form edits by user
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }
  
  // * Submit login request
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      console.log('Token off the data request?? ->', data.token)
      setTokenToLocalStorage(data.token)

      // ? SET NAVIGATION TO LAST PAGE
      // * CHANGE THIS!!
      navigate('/preloved')
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }
  return (
    <section className='form-page'>
      <Container>
        <Row>
          <form className='login-form col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>

            <h1>Login</h1>
            <h2>Only members can access the preloved boards pages</h2>

            {/* Email */}
            <label className='label' htmlFor='email'>Email</label>
            <input type='email' name='email' className='input' placeholder='Email' required value={formData.email} onChange={handleChange} />
            {/* Password */}
            <label className='label' htmlFor='password'>Password</label>
            <input type='password' name='password' className='input' placeholder='Password' required value={formData.password} onChange={handleChange} />
            {errors && <p className='text-danger text-center'>Unauthorised</p>}

            <Link className='link' to='/register'>Not a member yet?</Link>
            
            <button type="submit" className="submit-btn">Log in</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}
export default Login