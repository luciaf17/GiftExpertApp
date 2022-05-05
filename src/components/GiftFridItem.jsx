import React from 'react'

const GiftFridItem = ({ title, url}) => {

  return (
    <div className='card'>
        <h5>{title}</h5>
        <img src={url} alt={title} />
    </div>
  )
}

export default GiftFridItem;