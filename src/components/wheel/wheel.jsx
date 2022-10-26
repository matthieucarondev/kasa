import React, { useState } from 'react'
import ArrowLeft from '../../asset/ArrowLeft.png'
import ArrowRight from '../../asset/ArrowRight.png'
import './wheel.css'


function wheel({ pictures }) {
  let [pictureDisplayed, updatePicture] = useState(0)
  let PicturesNumber = pictures.length
  const previewPicture = () => {
    if (pictureDisplayed === 0) {
      updatePicture(PicturesNumber - 1)
    } else {
      updatePicture(pictureDisplayed - 1)
    }
    return updatePicture
  }
  const nextPicture = () => {
    if (pictureDisplayed === PicturesNumber - 1) {
      updatePicture((PicturesNumber = 0))
    } else {
      updatePicture(pictureDisplayed + 1)
    }
    return updatePicture
  }
  return (
    <div className="kasa-wheel">
      {PicturesNumber > 1 && (
        <>
        <img
          className="arrow arrow-left"
          src={ArrowLeft}
          alt="arrow left"
          onClick={previewPicture}
        />
    
     
        <img
          className="arrow arrow-right"
          src={ArrowRight}
          alt="arrow right"
          onClick={nextPicture}
        />
        </>
       )}
      {pictures.map((picture, index) =>
        index === pictureDisplayed ? (
          <div>
            <img
              key={index}
              className="wheel-image displayed"
              src={picture}
              alt="lodging"
            />
            <span key={`image-${index}`} className="picture-number">{`${
              index + 1
            }/${PicturesNumber}`}</span>
          </div>
        ) : (
          <img
            key={index}
            className="wheel-image"
            src={picture}
            alt="lodging"
          />
        )
      )}
    </div>
  )
}

export default wheel
