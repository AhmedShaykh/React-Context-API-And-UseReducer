import React, { useReducer } from "react";
import CounterReducer from "../Hooks/CounterReducer";

const ChildReducer = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1);
    console.log(state)
    return (
        <div>
            <h1>
                Learning React Counter UseReducer
            </h1>
            <h2>
                Value Of Reducer State Is : {state}
            </h2>
            <button onClick={() => dispatch('INCREMENT')}>
                Increment Reducer
            </button>
            <br />
            <button onClick={() => dispatch('DECREMENT')}>
                Decrement Reducer
            </button>
        </div>
    );
}

export default ChildReducer;