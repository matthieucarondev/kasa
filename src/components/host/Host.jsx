import React from "react"
import './Host.css'


const Host = ({ host }) => {
  return (
    <aside className="host">
      <p className="hostName">{host.name}</p>
      <img
        className="profilPictureHost"
        src={host.picture}
        alt="profilPictureHost"
      />
    </aside>
  )
}

export default Host