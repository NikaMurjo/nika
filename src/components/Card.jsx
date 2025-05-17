import React from 'react'

export default function Card({title = 'Card title', content = 'Card content'}) {
  return (
        <div className='card'>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
  )
}
