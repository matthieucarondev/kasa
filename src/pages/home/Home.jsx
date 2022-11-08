import React, { useEffect } from 'react'
// import Header from '../../components/header/header'
import Banner from '../../components/banner/Banner'
import ListCard from '../../components/listCard/ListCard'
import './Home.css'
// import Footer from '../../components/footer/footer'

function Home() {
  useEffect(() => {
    document.title = 'kasa-home'
  })
  return (
    <div>
      {/* <Header /> */}
      <article className='homeContainer'>
      <Banner page="home" />
      <ListCard />
      </article>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
