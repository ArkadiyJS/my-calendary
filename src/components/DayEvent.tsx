import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function DayEvent(props) {


const splitData = props.eve.split(' ')

const dayMothYear = `${splitData[1]} ${splitData[2]} ${splitData[3]}`

const monthZ = splitData[1]

const dayZ = splitData[2]

const yearZ = splitData[3]



const [pickTime , setTime] = useState('20:00')

const [eventName, setEventName] = useState('')



const handleSubmit = (e)=>{

      e.preventDefault()

    if(!!eventName){
      const newEventDay ={
        id: uuid(),
        day:dayZ,
        month:monthZ,
        year: yearZ,
        time:pickTime,
        textEvent:eventName,
      }
       console.log(newEventDay)
    }
    
}


  return (


    <form onSubmit={handleSubmit}>
      <div>
        <h1>{(!!props.eve) ? dayMothYear : ''}</h1>
        
       <input type='time' value={pickTime}  onChange={(e)=>setTime(e.target.value)} />
       
      </div>
      
      
      <label>

      <div>
        <input type='text'  value={eventName}  onChange={(e)=>setEventName(e.target.value)} />
      </div>

      <div>
        <button type='submit'>создать событие</button>
      </div>
            
      
      </label>
      
    </form>
  );
}

export default DayEvent;