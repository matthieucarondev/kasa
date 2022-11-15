import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import About from './pages/about/About'
import Error from './pages/error/Error'
import Lodging from './pages/lodging/Lodging'
import Footer from './components/footer/Footer'
import './Index.css'

function index() {
  
return(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>

)
}
export default index