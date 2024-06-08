import { useState, useEffect, useRef } from 'react'
import './App.css'
import AnimatedCursor from "react-animated-cursor"
import Typewriter from 'typewriter-effect';
import Mealitem from './Mealitem'
import chImage from './assets/ch.png'; // Importing the image file

function App() {
  const [item,setItem] = useState("Arrabiata");
  const [inputValue, setInputValue] = useState('');
  const [meals, setMeals] = useState([]);
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
        console.log(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [url]);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setItem(inputValue);
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
  };
  const findDivRef = useRef(null);

  const scrollToDiv = () => {
      findDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
     <AnimatedCursor
           innerSize={10}
           outerSize={25}
           color='255, 69, 0'
           outerAlpha={0.2}
           innerScale={1.9}
           outerScale={10}
           clickables={[
             'a',
             'input[type="text"]',
             'input[type="email"]',
             'input[type="number"]',
             'input[type="submit"]',
             'input[type="image"]',
             'label[for]',
             'select',
             'textarea',
             'button',
             '.link',
             '.card'
           ]}
           innerStyle={{
            border: '3px solid black'
          }} />
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>News</li>
        <li>Subscribe</li>
      </ul>
    </div>
    <div className="hero">
      <div>
      <h1>Learn Cooking in a Simple Way</h1>
      <p>Over 10k+ Recipes from all around world</p>
      <p>
      <Typewriter
  options={{
    strings: ['Try it Now!'],
    autoStart: true,
    loop: true,
  }}
/>
      </p>
      <button id="hero" onClick={scrollToDiv}>Get Started</button>
      </div>
      <div>
      <img src={chImage} alt="CH" id='chimg' />
      </div>
    </div>
   
<div className='fill' id='findDiv' ref={findDivRef}>
    <h1>Find: </h1>
    <div className='filler'>
      <input type='text' value={inputValue}
        onChange={handleChange} placeholder='Arrabiata' />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
</div>

<div class="slanted-div">
<div className="container">
      <h1>{item}</h1>
      <div className='card-container'>
      {meals.length > 0 ? (
          meals.map((meal) => <Mealitem key={meal.idMeal} item={meal} />)
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
</div>

    <div className='fancy'>
    <h1>Thank you for visiting us</h1>
    <p>This is a simple React Application</p>
    </div>
    </>
  )
}

export default App
