import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


function Card({ id, img, title }) {
  return (
    <Link to={`/lodging/${id}`}>
         <figure className="card">
        <img className="cardImg" src={img} alt={`${title} cover`} />
        <figcaption className="cardText">{title}</figcaption>
      </figure>
    </Link>
  )
}

export default Card