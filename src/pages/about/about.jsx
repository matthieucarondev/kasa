import React , { useEffect}from 'react'
// import Header from '../../components/header/header'
// import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
function about() {
   useEffect(()=>{
    document.title = "kasa- À propos"
  })
  return (
    <div>
      {/* <Header /> */}
       <Banner page="about" />
 
      {/* <Footer /> */}
    </div>
  )
}

export default about
