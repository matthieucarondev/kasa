import React, { useState } from 'react'
import ArrowLeft from '../../asset/ArrowLeft.png'
import ArrowRight from '../../asset/ArrowRight.png'
import './Wheel.css'

function Wheel({ pictures }) {
  /* Crée un Hook d'état */
  let [pictureDisplayed, setPictureDisplayed ] = useState(0) //useState, représente la valeur de base, 0
  //updatePicture, est la fonction que l'on appelle et qui modifie cette valeur
  let PicturesNumber = pictures.length
  // on recupére le nombre image total
  function previewPicture() {
    // si on utilise previewPicture
    if (pictureDisplayed === 0) {
     setPictureDisplayed(PicturesNumber - 1)
      // on passe de la premier image a la derniere
    } else {

      setPictureDisplayed(pictureDisplayed - 1)     
       // sinon  on revien a l'image précedente 
    }
   
  }
  function nextPicture() {
    // si on utilise nextPicture
    if (pictureDisplayed === PicturesNumber - 1) {
      // on passe de la dernier image a la premiere
      setPictureDisplayed((PicturesNumber = 0))
    } else {
      setPictureDisplayed(pictureDisplayed + 1)
      // sinon on passe a l'image suivant
    }
    
  }
  return (
    <section className="kasa-wheel">
      {/* si il y a plus  de une photo on affiche les fléche  */}
      {PicturesNumber > 1 && (
        <article className="kasaArrow">
          <img
            className="arrow arrow-left"
            src={ArrowLeft}
            alt="arrow left"
            onClick={previewPicture} // on utilise la function previewPicture
          />

          <img
            className="arrow arrow-right"
            src={ArrowRight}
            alt="arrow right"
            onClick={nextPicture} // on utilise la function nextPicture
          />
        </article>
      )}
      {pictures.map((picture, index) =>
        // parcourt mon tableau avec les image
        index === pictureDisplayed ? (
          //si index strictement egal pictureDisplayed on affiche ceci
               <article key={index}>
            <img
              key={index}
              className="wheel-image displayed"
              src={picture}
              alt="lodging"
            />
            <span key={`image-${index}`} className="picture-number">{`${
              index + 1
            }/${PicturesNumber}`}</span>
            {/* on affiche le numero de l'image sur le nombre total image */}
          </article>
        ) : (
          //sinon on affiche ceci
          <img
            key={index}
            className="wheel-image"
            src={picture}
            alt="lodging"
          />
        )
      )}
    </section>
  )
}

export default Wheel
