import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Wheel from '../../components/wheel/wheel'
import Tag from '../../components/tag/tag'
import Host from '../../components/host/Host'
import Rating from '../../components/rating/rating'
import Error from '../error/error'
import datas from '../../data/data.json'
import './lodging.css'

function Lodging() {
  useEffect(() => {
    document.title = 'kasa-Location'
  })
  const { id } = useParams()
  // le formulaire d'hébergement à partir de la base de données
  const lodgingSearched = datas.find((lodging) => lodging.id === id)
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
						
          </div>
        </div>
       </article>
    </section>
  )
}

export default Lodging
