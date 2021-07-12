import React, { useState } from "react";

function MathsApp() {
    const [mathVal, setmathVal] = useState("");
    const [finalVal, setfinalVal] = useState("");
    const handleSubmit = (operation) => {
if(mathVal){
    switch(operation) {
        case 'square':
          return setfinalVal(mathVal*mathVal);
          case 'Exponential':
          return setfinalVal(Math.exp(mathVal));
          case 'Precent':
          return setfinalVal(mathVal+'%');
        default:
          return setfinalVal(mathVal);
      }
}
      };
  return (

    
    
     <div>
          <div className="list-group">
        <div className="list-group-item animated fadeIn">
    

          <form className="text-center">
            <label>Enter Number: </label>
            <input
              type="text"
              value={mathVal}
              onChange={(e) => setmathVal(e.target.value)}
            />

            <div className="text-center">
            <button className="btn btn-primary m-3" type="button" onClick={() => handleSubmit('square')} >Square</button>
            <button className="btn btn-primary m-3" type="button" onClick={() => handleSubmit('Exponential')} >Expoential</button>
            <button className="btn btn-primary m-3" type="button" onClick={() => handleSubmit('Precent')} >Precentage</button>
            </div>
            <div className="text-center">
              <h2>Type and submit to see results</h2>
            {finalVal}
           
            </div>
          </form>
        </div>
      </div>
     </div>
  );
}

export default MathsApp;
