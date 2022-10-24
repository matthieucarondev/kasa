import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/header'
import Wheel from '../../components/wheel/wheel'
import Footer from '../../components/footer/footer'
import Tag from '../../components/tag/tag'
import Error from '../error/error'
import datas from '../../data/data.json'
import './lodging.css'



function Lodging() {
const { id } = useParams()
// le formulaire d'hébergement à partir de la base de données
 const lodgingSearched = datas.find((lodging)=> lodging.id===id)
return lodgingSearched === undefined ? (
    <Error />
  ) : (
    <div>
      <Header />
          <div className='kasa-lodging'>
            <div className='lodging-header'>
                <Wheel pictures={lodgingSearched.pictures}/>
                <div className='lodging-location'>
                    <h1>{lodgingSearched.title}</h1>
                    <h2>{lodgingSearched.location}</h2>
                    <Tag tags={lodgingSearched.tags} />

                </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lodging
