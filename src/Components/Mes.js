import React ,{useContext} from "react";
import Dia from "./Dia";
export default function Month({ mes }) {  
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 h-100vw">      
      {mes.map((row, i) => (               
        <React.Fragment key={i}>
          {row.map((day, idx) => (           
           
          <Dia day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}