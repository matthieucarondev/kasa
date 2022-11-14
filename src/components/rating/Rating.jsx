import React from 'react'
import GreyStar from '../../asset/star.png'
import RedStar from '../../asset/fullStar.png'
import './Rating.css'

function Rating({ rating }) {
  // on soustrait le nombre du tableau  moin 5
  const lodgingNegRating = 5 - rating
  function greyStars() {
    // on affiche le nombre d'étoile gris
    let greyStarsArray = []
    for (let i = 0; i < lodgingNegRating; i++) {
      greyStarsArray.push(
        <img
          src={GreyStar}
          key={`Étoile grisée n°${i}`}
          alt={`Rating is ${rating}/5`}
        />
      )
    }
    return greyStarsArray
  }
  function redStars() {
    // on affiche le nombre d'étoile rouge
    let redStarsArray = []
    for (let j = 0; j < rating; j++) {
      redStarsArray.push(
        <img
          src={RedStar}
          key={`Étoile rouge n°${j}`}
          alt={`Rating is ${rating}/5`}
        />
      )
    }
    return redStarsArray
  }

  return (
    <article className="lodgingRating">
      {redStars()}
      {greyStars()}
    </article>
  )
}
export default Rating
