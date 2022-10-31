import React, { useEffect } from 'react'
// import Header from '../../components/header/header'
import Banner from '../../components/Banner/Banner'
import ListCard from '../../components/ListCard/ListCard'
// import Footer from '../../components/footer/footer'

function Home() {
  useEffect(() => {
    document.title = 'kasa-home'
  })
  return (
    <div>
      {/* <Header /> */}
      <Banner page="home" />
      <ListCard />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
