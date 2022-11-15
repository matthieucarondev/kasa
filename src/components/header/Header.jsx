import React from 'react'
import logo from '../../asset/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

function header() {
  return (
    <header className="header"> 
        <img src={logo} className="logo" alt="logo kasa" />
      <nav>
        {/* crée le lien de la page d'accueil */}
        <Link id="Accueil" to="/">
          ACCUEIL
        </Link>
        {/* crée le lien pour la page À propos */}
        <Link id="about" to="/about">
          À PROPOS
        </Link>
      </nav>
    </header>
  )
}

export default header
