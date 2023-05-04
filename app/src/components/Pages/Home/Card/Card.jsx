import React from 'react'

export default function Card({ image, title, description }) {
  return (
    <div className='card'>
      <img src={image} style={{ width: '330px', height: '330px' }} draggable="false"/>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  )
}