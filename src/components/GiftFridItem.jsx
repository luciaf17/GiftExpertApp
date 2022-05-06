import React from 'react'

const GiftFridItem = ({ title, url}) => {

  return (
    <div className='card animate__animated animate__fadeIn '>
        <h5>{title}</h5>
        <img src={url} alt={title} />
    </div>
  )
}

export default GiftFridItem;