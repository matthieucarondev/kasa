import React from 'react'
import GreyStar from '../../asset/star.png'
import RedStar from '../../asset/fullStar.png'
import './Rating.css'


function Star( {type , key}) {
  //on verifie si le type est red sa sera Redstar sinon sa sera GreyStar 
  const starImage = type === 'red' ? RedStar : GreyStar;
//Effectuez le rendu de l’image de l’étoile avec le texte alternatif et l’incrustation appropriés
  return <img src={starImage} key={key} alt={`Rating is ${type === 'red' ? '5' : '0'}/5`} />;
}


function Rating({ rating }) {
  //Calculer le nombre d’étoiles rouges (arrondies à l’unité inférieure) et d’étoiles grises
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
