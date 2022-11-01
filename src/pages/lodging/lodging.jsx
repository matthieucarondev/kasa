import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Wheel from '../../components/wheel/Wheel'
import Tag from '../../components/tag/Tag'
import Host from '../../components/host/Host'
import Rating from '../../components/rating/Rating'
import Error from '../error/Error'
// import DropDown from '../../components/dropdown/Dropdown'
import datas from '../../data/Data.json'
import './Lodging.css'

function Lodging() {
  useEffect(() => {
    document.title = 'kasa-Location'
  })
  const { id } = useParams()
  // le formulaire d'hébergement à partir de la base de données
  const lodgingSearched = datas.find((lodging) => lodging.id === id)
  //   const equipments = lodgingSearched?.equipments.map(
  //   (equipment, index) => {
  //     return <li key={index}>{equipment}</li>
  //   }
  // )
  return lodgingSearched === undefined ? (
    <Error />
  ) : (
    <section>
      <article className="kasa-lodging">
        <div className="lodging-header">
          <Wheel pictures={lodgingSearched.pictures} />
          <div className="lodging-location">
            <h1>{lodgingSearched.title}</h1>
            <h2>{lodgingSearched.location}</h2>
            <Tag tags={lodgingSearched.tags} />
          </div>
          <div className="hr">
            <Host host={lodgingSearched.host} />
							 <Rating rating = {lodgingSearched.rating} />
          </div>      {/* <div className="accomodation-details">
        <DropDown
          title={"Description"}
          description={lodgingSearched?.description}
        />
        <DropDown title={"Equipements"} description={equipments} />
      </div>
      */}
        </div>
       </article>
    </section>
  )
}

export default Lodging
