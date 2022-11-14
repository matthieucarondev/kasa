import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ id, img, title }) {
  // on recupére id ,img,title
  return (
    //on crée la carte et le lien avec id
    <Link to={`/lodging/${id}`}>
      <figure className="card">
        {/* on crée image avec img récupérer */}
        <img className="cardImg" src={img} alt={`${title} cover`} />
        {/* on  crée le titre grace au title récupérer */}
        <figcaption className="cardText">{title}</figcaption>
      </figure>
    </Link>
  )
}

export default Card
