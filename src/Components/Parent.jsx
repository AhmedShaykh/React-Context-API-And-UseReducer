import React from 'react';
import Child from './Child';
import ChildReducer from './ChildReducer';

const Parent =(Props) => {
    return (
      <div>
        <Child name={Props.name}/>
        <hr />
        <ChildReducer />
      </div>
    );
  }
  
export default Parent;