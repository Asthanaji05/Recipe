import React from 'react'
import './Recipie.css'
function Recipie({item}) {
  return (
    <div className='recipie'>
      
        <img src= {item.strMealThumb} id='recImg' />
        <div className='flex'>
        <h4>{item.strMeal} : </h4>
        <span>{item.strCategory}</span>
        <span>{item.strArea}</span>
        </div>
        <a href={item.strYoutube} target='_blank'>Youtube Link</a>
        <p>{item.strInstructions}</p>
        
    </div>
  )
}

export default Recipie