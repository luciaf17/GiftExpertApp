import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

  return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GiftGrid key={category} category={category} />
                ))
            }
        </ol>
    </>
  )
}

export default GiftExpertApp;