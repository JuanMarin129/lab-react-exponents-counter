import { useState } from "react";

const Counter = (props) => {


  const decrement = () => props.setCount((prevCount) => prevCount - 1);
  const increment = () => props.setCount((prevCount) => prevCount + 1);

  const decrementExponente = () => props.setExponente((prevExponente) => prevExponente - 1);
  const incrementExponente = () => props.setExponente((prevExponente) => prevExponente + 1);

  return (
    <> 
      <div className="counter-container">
          <p className="counter-value">{props.count}</p>
          <button className="counter-button" onClick={decrement}>-</button>
          <button className="counter-button" onClick={increment}>+</button>
      </div>    
        <br ></br>
        <div>
          <p className="counter-value">{props.exponente}</p>
          <button className="counter-button" onClick={decrementExponente}>-</button>
          <button className="counter-button" onClick={incrementExponente}>+</button>
      </div>
    </>
  );
};

export default Counter;
