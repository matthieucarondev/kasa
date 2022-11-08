import React, { useState } from 'react'
import './DropDown.css'
import Arrow from '../../asset/ArrowDown.png'




function DropDown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="kasa-dropdown" id={`dropdown-${title}`}>
      <div className="dropdown-header">
        <h3 className="dropdown-title">{title}</h3>
        <div
          className={`dropdown-arrow ${isOpen}`}
          onClick={() => setIsOpen(false)}
        >
          <img src={Arrow} alt="dropdown open" />
        </div>
      </div>
      <div className="dropdown-description">{description}</div>
    </div>
  ) : (
    <div className="kasa-dropdown" id={`dropdown-${title}`}>
      <div className="dropdown-header">
        <h4 className="dropdown-title">{title}</h4>
        <div
          className={`dropdown-arrow ${isOpen}`}
          onClick={() => setIsOpen(true)}
        >
          <img src={Arrow} alt="dropdown close" />
        </div>
      </div>
    </div>
  )
}

export default DropDown
