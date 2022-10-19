import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


function Card({ id, img, title }) {
  return (
    <Link to={`/descrip/${id}`}>
         <div className="card">
        <img className="cardImg" src={img} alt={`${title} cover`} />
        <p className="cardText">{title}</p>
      </div>
    </Link>
  )
}

export default Card