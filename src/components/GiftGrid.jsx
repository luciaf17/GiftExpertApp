import React, {useEffect, useState} from 'react'
import GiftFridItem from './GiftFridItem'
import {getGifts} from '../helpers/getGifs'

const GiftGrid = ({category}) => {

    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        getGifts(category).then(gifts => {
            setGifts(gifts);
        })
    }, [category])

  return (
      <>
    <h3>{category}</h3>
    <div className='card-grid'>
        
            {
                gifts.map( gift => (
                    <GiftFridItem key={gift.id} {...gift} />
                ))
            }
        
    </div>
    </>
  )
}

export default GiftGrid;