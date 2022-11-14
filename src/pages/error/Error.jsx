import React, { useEffect } from 'react'
import Error from '../../components/error/Error'

function error() {
  useEffect(() => {
    document.title = 'kasa-erreur404'
  })
  return (
    <section>
      <Error />
    </section>
  )
}

export default error
