import React from "react";
import { Link } from 'react-router-dom'
import './error.css'


function Error() {
    return(
        <div className='errorHome'>
            <p className='errorTitle'>404</p>
             <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
             <div className="LinkHome">
        <Link className="link" to={'/'}>
            Retourner sur la page d’accueil
        </Link>
        </div>
        </div>

    )
}
export default  Error