import React from 'react';
import {useState} from 'react'
import './Day.css';


function Day(){

    const [isMorning, setMorning] = useState(true);

    return(
        <div className={`night ${isMorning ? "day":""}`}>
            <h1>
                Have a Good {isMorning ? "Morning":"Night"}
            </h1>

            <br/>

            <button onClick={() => {setMorning(!isMorning)}}>
                Change to {isMorning ? "Night":"Morning"}
            </button>
        </div>
    );
}

export default Day;
