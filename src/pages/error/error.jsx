import React, {useEffect} from 'react'

// import Header from '../../components/header/header'
// import Footer from '../../components/footer/footer'
import Error from '../../components/error/error'
function error() {
   useEffect(()=>{
    document.title = "kasa-erreur404"
  })
  return (
    <div>
      {/* <Header /> */}
      <Error/>
      {/* <Footer /> */}
    </div>
  )
}

export default error