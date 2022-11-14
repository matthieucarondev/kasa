import React from 'react'
import GreyStar from '../../asset/star.png'
import RedStar from '../../asset/fullStar.png'
import './Rating.css'

function Rating(datas) {
  // on recupére le nombre dans le tableau
  let lodgingRating = datas.rating
  // on soustrait le nombre du tableau  moin 5
  let lodgingNegRating = 5 - lodgingRating
  function greyStars() {
    // on affiche le nombre d'étoile gris
    let greyStarsArray = []
    for (let i = 0; i < lodgingNegRating; i++) {
      greyStarsArray.push(
        <img
          src={GreyStar}
          key={`Étoile grisée n°${i}`}
          alt={`Rating is ${lodgingRating}/5`}
        />
      )
    }
    return greyStarsArray
  }
  function redStars() {
    // on affiche le nombre d'étoile rouge
    let redStarsArray = []
    for (let j = 0; j < lodgingRating; j++) {
      redStarsArray.push(
        <img
          src={RedStar}
          key={`Étoile rouge n°${j}`}
          alt={`Rating is ${lodgingRating}/5`}
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
