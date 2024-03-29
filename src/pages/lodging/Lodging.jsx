import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Wheel from '../../components/wheel/Wheel'
import Tag from '../../components/tag/Tag'
import Host from '../../components/host/Host'
import Rating from '../../components/rating/Rating'
import DropDown from '../../components/dropdown/Dropdown'
import datas from '../../data/Data.json'
import './Lodging.css'

function Lodging() {
  const { id } = useParams()
  // hook est un hook React Router 
// qui permet d'accéder aux paramètres de l'URL courante. 
  const navigate = useNavigate()
// renvoie une fonction qui permet de naviguer par programmation
  const [lodgingSearched, setLodgingSearched] = useState(null)
  const [equipments, setEquipments] = useState([])

  useEffect(() => {
    // le formulaire d'hébergement à partir de la base de données
    const lodgingFound = datas.find((lodging) => lodging.id === id)

    if (lodgingFound) {
      setLodgingSearched(lodgingFound)

      setEquipments(
        lodgingFound.equipments.map((equipment, index) => {
          return <li key={index}>{equipment}</li>
          // on crée une constance  pour  crée une liste avec les equipment
        })
      )
      document.title = `kasa-Location-${lodgingFound.title}`
    } else {
      navigate('/Error')
    }
  }, [id, navigate])

  return (
    <>
      {lodgingSearched && (
        <section className="kasa-lodging">
          <article className="lodging-header">
            <Wheel pictures={lodgingSearched.pictures} />
          </article>
          <article className="lodging-information">
            <section className="lodging-location">
              <h1>{lodgingSearched.title}</h1>
              <h2>{lodgingSearched.location}</h2>
              <Tag tags={lodgingSearched.tags} />
            </section>
            <article className="hr">
              <Host host={lodgingSearched.host} />
              <Rating rating={lodgingSearched.rating} />
            </article>
          </article>
          <article className="dropdownLodging">
            <DropDown
              className="dropdownLodgingTag dropdownLodging-description"
              title={'Description'}
              description={lodgingSearched.description}
            />
            <DropDown
              className="dropdownLodgingTag dropdownLodging-Équipements"
              title={'Équipements'}
              description={equipments}
            />
          </article>
        </section>
      )}
    </>
  )
}

export default Lodging
