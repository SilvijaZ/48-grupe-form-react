// import './App.css'

import { useState } from "react";
import { Basketball } from "./components/basketball/Basketball";
import { List } from './components/list/List';



function App() {
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
      <List />
      <h1>Hooks FTW</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <Basketball />
    </>
  )
}

export default App;

// destructizuoti - isardyti
// const [a, b] = [10, 2, 8, 6]
// galim pasiimti a ir b
// a = 10
// b = 2

/* 
const x = useState()
const a = x[0]
const b = x[1] 
*/