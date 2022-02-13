import React , { useContext } from "react";
import counterContext from "../Hooks/CounterContext";

const Child =(Props) => {
  let counterValue = useContext(counterContext)
  console.log(counterValue)
    return (
      <div>
        <h1>This Is First Child</h1>
        <h2>This Is {Props.name}</h2>
        <h2>Counter Value Is : {counterValue[0]}</h2>
        <button onClick={() => {counterValue[1](++counterValue[0])} }>Increament</button>
        <br />
        <button onClick={() => {counterValue[1](--counterValue[0])} }>Decreament</button>
      </div>
    );
  }
  
  export default Child;