import React , { useContext } from "react";
import counterContext from "../Hooks/CounterContext";

const Child = (Props) => {
  let counterValue = useContext(counterContext);
  console.log(counterValue ,"Context Data");
    return (
      <div>
        <h1>This Is Context API</h1>
        <h2>This Is {Props.name}</h2>
        <h2>Counter Value Is : {counterValue[0]}</h2>
        <button onClick={() => {counterValue[1](++counterValue[0])} }>Increment Context</button>
        <br />
        <button onClick={() => {counterValue[1](--counterValue[0])} }>Decrement Context</button>
      </div>
    );
  }
  
  export default Child;