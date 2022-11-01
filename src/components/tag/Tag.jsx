import React from 'react'
import './Tag.css'


const Tags = ({ tags }) => {
  return (
    <div className="kasa-tags">
      {tags.map((tag) => (
        <p className="tag" key={tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}

export default Tags

