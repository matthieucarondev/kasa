import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'


function home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Page d'accuiel
        </p>
         <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    
      </header>
    </div>
  );
}

export default home
