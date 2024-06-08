import React, { useState } from 'react';
import './Mealitem.css';
import './Recipie'
import Recipie from './Recipie';
function Mealitem({item}) {
  const getYoutubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  const [display, setDisplay] = useState(false);
  const videoId = item.strYoutube ? getYoutubeEmbedUrl(item.strYoutube) : null;
  return (
<>
    <div className='card' onClick={()=>setDisplay(!display)}>
      <div>
      <img src= {item.strMealThumb} />
      </div>
          <div className='card-content'>
            <h2>{item.strMeal}</h2>
            <div className='flex'>
              <span>{item.strCategory}</span>
              <span>{item.strArea}</span>
        </div>
          </div>
    </div>
    <br></br>
    {display ? <Recipie item={item}/>
    : <p></p>}
</>
    
  )
}

export default Mealitem;