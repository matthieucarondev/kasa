import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'
import datas from '../../data/Data.json'
import './ListCard.css'

function ListCard() {
  return (
    <div className="listCard">
      {datas.map((lodging) => (
        <Link key={lodging.id} to={'/lodging/'+lodging.id+'/#'}>
        <Card key={lodging.id} 
              id={lodging.id} 
              img={lodging.cover} 
              title={lodging.title} />
              </Link>
      ))}
    </div>
  )
}
export default ListCard
