import React from 'react'

export default function Hero({name, description}) {
  return (
    <div className='hero'>
        <div className="hero-content">
            <span>welcome to <b>{name}</b></span>
            <span>{description}</span>
        </div>
        <div className="hero-image">
            <img src={require('../images/hairstyle2.jpeg')} alt="heroImage" />
        </div>
    </div>
  )
}
