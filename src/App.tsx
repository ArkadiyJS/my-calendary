import 'react-calendar/dist/Calendar.css';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import DayEvent from './components/DayEvent.tsx';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState < Value > (new Date());

  const [eve,setEve] = useState('')


  



useEffect(()=>{
const x = new Date()
setEve(`${x}`)

},[])
 

  return (
    <>
      <Calendar  onClickDay={(i)=>setEve(`${i}`)} onChange={onChange} value={value} />
       <DayEvent eve={eve} />


      
    </>
  );
}

export default MyApp



