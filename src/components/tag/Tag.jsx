import React from 'react'
import './Tag.css'

function Tags({ tags }) {
  return (
    <article className="kasa-tags tagLodging">
      {tags.map((tag) => (
        <p className="tag" key={tag}>
          {tag}
        </p>
      ))}
    </article>
  )
}
export default Tags
