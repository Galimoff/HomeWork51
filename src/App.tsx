import React, {useState} from 'react';
import './App.css';
import RandomNumber from "./HomeWork51/HomeWork";

function App() {
  const [number,setNumber] = useState([
    {numeral: 1}
  ]);

  const changeNumber = () => {
    setNumber([
      {numeral: Math.floor(Math.random() * (5 - 36) +36)}
    ]);
  };

  return (
    <div className="App">
      <button onClick={changeNumber}>Chenge number</button>
<RandomNumber numeral={number[0].numeral}>
 </RandomNumber>
      <RandomNumber numeral={number[0].numeral}>
      </RandomNumber>
      <RandomNumber numeral={number[0].numeral}>
      </RandomNumber>
      <RandomNumber numeral={number[0].numeral}>
      </RandomNumber>
      <RandomNumber numeral={number[0].numeral}>
      </RandomNumber>
    </div>
  );
}

export default App;
