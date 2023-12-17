import React, { useState } from 'react';
import './Boost.css'

const Boost = () => {
      // useState use like a function in react when upadte event hendeler
  const [count, setCount] = useState(0);
  const increase = () =>{
    const newCount=count+1
    setCount(newCount)
  }
  return(
    <div className='boost-conyainer'>
      <h2>power : {count}</h2>
      <button style={{border:"3px solid black", padding: "5px, 0"}} onClick={increase}>Boost</button>
    </div>
  )
};

export default Boost;
