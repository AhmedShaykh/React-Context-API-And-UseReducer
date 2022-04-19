import React, { useState } from 'react';
import Parent from './Components/Parent';
import CounterContext from './Hooks/CounterContext';
import ChildReducer from './Components/ChildReducer';
import './App.css';

function App() {
  let countState = useState(1);
  return (
    <CounterContext.Provider
      value={countState}
    >
      <div className="App">
        <h1>
          Learning React Hooks (Context API & UseReducer)
        </h1>
        <Parent name="Counter Context" />
        <hr />
        <ChildReducer />
      </div>
    </CounterContext.Provider>
  );
}

export default App;