import React, { useState } from 'react'
import './DropDown.css'
import Arrow from '../../asset/ArrowDown.png'

function DropDown({ title, description }) {
  //  /* Crée un Hook  d'état, qu’on va appeler isopen
  // Pendant le rendu initial, l’état local (isopen) a la même valeur que celle passée en premier argument (false).
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    //si isopen =>false on affiche
    <div className="kasa-dropdown" id={`dropdown-${title}`}>
      <div className="dropdown-header">
        <h3 className="dropdown-title">{title}</h3>
        <div
          className={`dropdown-arrow ${isOpen}`}
          onClick={() => setIsOpen(false)}
          // false on laisse le dropdown fermer
        >
          <img src={Arrow} alt="dropdown open" />
        </div>
      </div>
      <div className="dropdown-description">{description}</div>
    </div>
  ) : (
    // sinon on affiche ça
    <div className="kasa-dropdown" id={`dropdown-${title}`}>
      <div className="dropdown-header">
        <h4 className="dropdown-title">{title}</h4>
        <div
          className={`dropdown-arrow ${isOpen}`}
          onClick={() => setIsOpen(true)}
        /* Si le dropdown est à TRUE alors il affichera la description */
        >
          <img src={Arrow} alt="dropdown close" />
        </div>
      </div>
    </div>
  )
}

export default DropDown
