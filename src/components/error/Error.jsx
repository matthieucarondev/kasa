import React from "react";
import { Link } from 'react-router-dom'
import './Error.css'


function Error() {
    return(
        <article className='errorHome'>
            <p className='errorTitle'>404</p>
             <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
        <article className="LinkHome">
        <Link className="link" to={'/'}>
            Retourner sur la page d’accueil
        </Link>
        </article>
        </article>

    )
}
export default  Error