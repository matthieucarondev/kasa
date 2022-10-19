import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
function Home() {
  return (
    <div>
      <Header />
      <Banner page="home" />
      {/* <ListCard /> */}
      <Footer />
    </div>
  )
}

export default Home