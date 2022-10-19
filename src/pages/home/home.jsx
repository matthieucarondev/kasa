import React from 'react'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import ListCard from '../../components/ListCard/ListCard'
import Footer from '../../components/footer/footer'

function Home() {
  return (
    <div>
      <Header />
      <Banner page="home" />
      <ListCard />
      <Footer />
    </div>
  )
}

export default Home
