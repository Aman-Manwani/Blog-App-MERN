import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <ul className='header_comp'>
        <li><Link to='/'style={{ textDecoration: 'none'}}>Home</Link></li>
        <li><Link to='/about'style={{ textDecoration: 'none'}}>About</Link></li>
        <li><Link to='/contact'style={{ textDecoration: 'none'}}>Contact Us</Link></li>
        <li><Link to='/login'style={{ textDecoration: 'none'}}>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Header
