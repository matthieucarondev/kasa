import logoFooter from '../../asset/logofooter.png'
import React from 'react'
import './Footer.css'


function footer () {
    return (
        <footer className='footer'>
            <img className="logoFooter" src={logoFooter} alt="logoFooter" />
             <p className="Reserved">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default footer