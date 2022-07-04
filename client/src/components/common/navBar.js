import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated } from '../helpers/auth'


const NavBar = () => {

  const navigate = useNavigate()

  // Function to remove token and navigate to landing page
  const handleLogout = () => {
    window.localStorage.removeItem('women-that-shred')
    // ^ removes token
    navigate('/')
  }

  return (
    <header>
      <nav id='navbar'>
        <Link to="/boards/advice" className="logo link">Advice</Link>
        <Link to="/selection" className="logo link">Boards</Link>
        <Link to="/" className="logo link">WTS</Link>
        <Link to="/preloved" className="logo link">Preloved</Link>

        {/* SHOW 'LOGIN' WHEN LOGEED OUT & 'LOGOUT' WHEN LOGGED IN */}
        {userIsAuthenticated() ?
          <>
            <Link onClick={handleLogout} to='' className="logo link" alt='Logout'>Logout</Link>
          </>
          :
          <>
            <Link to="/login" className="logo link" alt='Login'>Login</Link>
          </>

        }
        
      </nav>
    </header>

  )
}

export default NavBar