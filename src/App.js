import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [addition, setAddition] = useState();
  const [subtraction, setSubtraction] = useState();
  const [multiplication, setMultiplication] = useState();
  const [division, setDivision] = useState();

  function handleNum1Change(event) {
    setNumber1(parseInt(event.target.value))
  }
  function handleNum2Change(event) {
    setNumber2(parseInt(event.target.value))
  }
  function onSubmit(){
    setAddition(number1+number2);
    setSubtraction(number1-number2);
    setMultiplication(number1*number2);
    setDivision(number1/number2);
  }
  return (
    <div>
      <div><input name="number1" value={number1} onChange={handleNum1Change} placeholder='Enter 1st number' /></div>
      <div><input name="number2" value={number2} onChange={handleNum2Change} placeholder='Enter 2nd number' /></div>
      <div><button onClick={onSubmit}>Enter</button></div>
      {addition &&<div>Addition of {number1} and {number2} is : {addition}</div>}
      {subtraction &&<div>Subtraction of {number1} and {number2} is : {subtraction}</div>}
      {multiplication &&<div>Multiplication of {number1} and {number2} is : {multiplication}</div>}
      {division&&<div>Division of {number1} and {number2} is : {division}</div>}

    </div>
  );
}

export default App;
