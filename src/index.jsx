import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter ,  Route, Routes , Navigate} from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Error from './pages/error/error'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/about/" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)