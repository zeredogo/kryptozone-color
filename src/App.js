import React, { useState } from 'react';
import SingleColor from './SingleColor';
import './App.css';
import Values from 'values.js'
import Navbar from './Navbar';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#800000').all(10));
  
  const handleSubmit =(e) => {
    e.preventDefault();
    try {
      
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className='container'>
      
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#800000'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
        
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
      <h4 className="footer"><small>Krypto Zone &copy; 2022</small></h4>
    </>    
  );
}

export default App;
