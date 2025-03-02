import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";



function App () {

  const [count, setCount] = useState(0);
  const [exponente, setExponente] = useState(2);


  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount} exponente={exponente} setExponente={setExponente}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} exponente={exponente} />

       {/* <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />*/}
      </div>
    </div>
  );
}

export default App;
