import React from "react"
import './Host.css'


const Host = ({ host }) => {
  return (
    <article className="host">
      <p className="hostName">{host.name}</p>
      <img
        className="profilPictureHost"
        src={host.picture}
        alt="profilPictureHost"
      />
    </article>
  )
}

export default Host