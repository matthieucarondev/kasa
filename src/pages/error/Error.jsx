import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
  useEffect(() => {
    document.title = 'kasa-erreur404'
  })
  return (
    <section>
        <article className="errorHome">
      <p className="errorTitle">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <article className="LinkHome">
        {/* crée le lien  de retour a la page d'accueil */}
        <Link className="link" to={'/'}>
          Retourner sur la page d’accueil
        </Link>
      </article>
    </article>
    </section>
  )
}

export default Error
