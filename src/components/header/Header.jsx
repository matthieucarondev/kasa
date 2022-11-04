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
        <Link id='Accueil' to="/">ACCUEIL</Link>
        <Link id='about' to="/about">À PROPOS</Link>
      </nav>
    </header>
  )
}

export default header
