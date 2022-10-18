import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter ,  Route, Routes , Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'

 
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
           
           <Route  path='/' element={<Home/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        
          </Routes>
        
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root')
)