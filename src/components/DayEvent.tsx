import React from 'react';

function DayEvent(props) {


const splitData = props.eve.split(' ')

const dayMothYear = `${splitData[1]} ${splitData[2]} ${splitData[3]}`

  return (


    <div>
      <div>
        <h1>{dayMothYear}</h1>
        
       
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