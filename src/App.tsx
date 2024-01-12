


import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState < Value > (new Date());

  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}

export default MyApp
