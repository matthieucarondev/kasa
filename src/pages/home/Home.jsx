import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import ListCard from '../../components/listCard/ListCard'
import './Home.css'

function Home() {
  //met a jour le titre du document
  useEffect(() => {
    document.title = 'kasa-home'
  })
  return (
    <section>
      <article className="homeContainer">
        <Banner page="home" />
        <ListCard />
      </article>
    </section>
  )
}

export default Home
