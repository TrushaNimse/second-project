import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number = 0, setNumber] = useState();

  function handleNumChange() {
    setNumber(number +1)
  }


  return (
    <div>
      <div>{number}</div>
      <button onClick={handleNumChange}>Count</button>
    </div>
  );
}

export default App;
