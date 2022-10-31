import React from 'react'
import logo from '../../asset/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

function header() {
  return (
    <header className="header">
      <a href="./">
        <img src={logo} className="logo" alt="logo kasa" />
      </a>
      <nav>
        <Link to="/">ACCUEIL</Link>
        <Link to="/about">À PROPOS</Link>
      </nav>
    </header>
  )
}

export default header
