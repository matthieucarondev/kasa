import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'
import datas from '../../data/Data.json'
import './ListCard.css'

function ListCard() {
  return (
    <section className="listCard">
      {datas.map((lodging) => (
        <Card
          key={lodging.id}
          id={lodging.id}
          img={lodging.cover}
          title={lodging.title}
        />
      ))}
    </section>
  )
}
export default ListCard
