import 'react-calendar/dist/Calendar.css';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import DayEvent from './components/DayEvent.tsx';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState < Value > (new Date());

  const [eve,setEve] = useState('')

  const [showInputFormEventDay,setShowInputFormEventDay] = useState(false)


  // useEffect(()=>{
  //   const x = new Date()
  //   setEve(`${x}`)

  // },[])
 

  return (
    <>
      <Calendar  onClickDay={(i)=>setEve(`${i}`)} onChange={onChange} value={value} />

      <button onClick={()=>{setShowInputFormEventDay(!showInputFormEventDay)}}>Добавить событие на этот день./скрыть</button>

      {!!showInputFormEventDay ?<DayEvent eve={eve} /> : ''} 


      
    </>
  );
}

export default MyApp



