import { useState } from "react";

export function FirstTry(){

    const [count, setCount] = useState(0);

  // per perpiešia turini: duomuo ir funkcija useState();
 

  function increment(){
    setCount(count + 1)
    // console.log(count);
  }

  function decrement(){
    setCount(count - 1)
    // console.log(count);
  }


    return (
        <>
          <h1>Hooks FTW</h1>
          <div className="counter">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          </div>
        </>
    );
}