import React, { useState } from 'react';
import Parent from './Components/Parent';
import CounterContext from './Hooks/CounterContext';
import './App.css';

function App() {
  let countState = useState(1); // [count , setCount]
  return (
    <CounterContext.Provider 
    // value={25}
    value={countState}
        >
      <div className="App">
        <h1>
          Learning React Hooks (Context API & UseReducer)
        </h1>
        <Parent name="Counter Context" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;