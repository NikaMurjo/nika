import React from 'react'

export default function Avatar({src, userName}) {
  return (
    <div className='avatar'>
      <img src={src} />
      <p>{userName}</p>
    </div>  
  )
}