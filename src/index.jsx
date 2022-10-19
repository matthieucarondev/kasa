import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Error from './pages/error/error'
import Lodging from './pages/lodging/lodging'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
         <Route path="/lodging/:id" element={<Lodging/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)