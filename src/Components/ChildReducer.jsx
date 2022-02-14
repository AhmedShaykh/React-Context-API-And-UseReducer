import React, { useReducer } from "react";
import CounterReducer from "../Hooks/CounterReducer";

const ChildReducer = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1);
    console.log(state)
    return (
        <div>
            <h1>
                This Is Counter UseReducer
            </h1>
            <h2>
                Value Of Reducer State Is : {state}
            </h2>
            <button onClick={() => dispatch('INCREAMENT')}>
                Increament Reducer
            </button>
            <br />
            <button onClick={() => dispatch('DECREAMENT')}>
                Decreament Reducer
            </button>
        </div>
    );
}

export default ChildReducer;