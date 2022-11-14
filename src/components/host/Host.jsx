import React from 'react'
import './Host.css'

function Host({ host }) {
  return (
    <aside className="host">
      {/* on recupére le nom du profile  */}
      <p className="hostName">{host.name}</p>
        {/* on récupére l'image du profile */}
      <img
        className="profilPictureHost"
        src={host.picture}
        alt="profilPictureHost"
      />
    </aside>
  )
}

export default Host
