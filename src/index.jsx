import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Lodging from './pages/Lodging/Lodging'
import Footer from './components/Footer/Footer'
import './Index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
         <Route path="/lodging/:id" element={<Lodging/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)