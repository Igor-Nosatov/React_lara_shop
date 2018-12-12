import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Tasksman</Link>
      <Link className='navbar-brand' to='/create'>Tasksman1</Link>
      <Link className='navbar-brand' to='/show'>Tasksman2</Link>
    </div>
  </nav>
)

export default Footer
