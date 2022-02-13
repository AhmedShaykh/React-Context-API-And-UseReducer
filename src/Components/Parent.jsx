import React from 'react';
import Child from './Child';

const Parent =(Props) => {
    return (
      <div>
        <Child name={Props.name}/>
      </div>
    );
  }
  
export default Parent;