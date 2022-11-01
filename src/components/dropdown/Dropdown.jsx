import React, { useState } from 'react'
import './DropDown.css'
import arrow from '../../asset/ArrowDown.png'

function Dropdown({ title, description }) {
  /* Crée un Hook d'état */
  const [ouvert, setOuvert] = useState(false)

  return (
    <div className="dropdown" id={`dropdown-${title}`}>
      <div className="header-dropdown">
        <div className="title-dropdown">{title}</div>
        <a
          className={`Arrow-dropdown ${ouvert}`}
          href={`#dropdown-${title}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={arrow} alt="Ouvrir cette liste" />
        </a>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        ouvert && <div className="description-dropdown">{description}</div>
      }
    </div>
  )
}

export default Dropdown
