import React, { useState } from 'react'
import GreyStar from '../../asset/star.png'
import RedStar from '../../asset/fullStar.png'
import datas from '../../data/data.json'
import './Rating.css'

function Star(datas) {
  let lodgingRating = datas.rating
  let lodgingNegRating = 5 - lodgingRating
  const greyStars = () => {
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
  const redStars = () => {
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
    <div className="lodgingRating">
      {redStars()}
      {greyStars()}
    </div>
    /* Available Props */
  )
}
export default Star
