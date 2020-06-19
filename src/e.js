import React, { useState } from 'react';
import './App.css';

export default function App() {

  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <br />
      
      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>

    </div>
  );
}