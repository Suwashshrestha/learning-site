import React from 'react'

function Card({ title, description, image }) {
  return (
    <div className="card-containt">
    <div className='card'>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </div>
  )
}

export default Card