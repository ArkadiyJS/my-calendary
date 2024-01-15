import React from 'react';

function DayEvent(props) {


const splitData = props.eve.split(' ')

const dayMothYear = `${splitData[1]} ${splitData[2]} ${splitData[3]}`

const dayZ = splitData[1]

const monthZ = splitData[2]

const yearZ = splitData[3]

  return (


    <div>
      <div>
        <h1>{(!!props.eve) ? dayMothYear : ''}</h1>
        
       <input type='number' />:
       <input type='number' />
      </div>
      
      
      <label>

      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>создать событие</button>
      </div>
            
      
      </label>
      
    </div>
  );
}

export default DayEvent;