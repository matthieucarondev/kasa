import React from 'react'
import GreyStar from '../../asset/star.png'
import RedStar from '../../asset/fullStar.png'
import './Rating.css'


function Star( {type , key}) {
  const starImage = type === 'red' ? RedStar : GreyStar;
  return <img src={starImage} key={key} alt={`Rating is ${type === 'red' ? '5' : '0'}/5`} />;
}


function Rating({ rating }) {
  const redStarsCount = Math.floor(rating);
  const greyStarsCount = 5 - redStarsCount;
  return (
    <article className="lodgingRating">
      {[...Array(redStarsCount)].map((_, index) => (
        <Star type="red" key={`RedStar${index}`} />
      ))}
      {[...Array(greyStarsCount)].map((_, index) => (
        <Star type="grey" key={`GreyStar${index}`} />
      ))}
    </article>
  );
}
export default Rating
