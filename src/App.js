import logo from './logo.svg';
import './App.css';

function App() {
  let num1 = 12, num2 = 16;
  let result = 0;

function handleAddition(){
  result=num1+num2;
  console.log(result);
}
function handleSubtraction(){
  result=num1-num2;
  console.log(result);
}
function handleDivision(){
  result=num1%num2;
  console.log(result);
}
function handleMultiplication(){
  result=num1*num2;
  console.log(result);
}
  return (
    <div>
    <div>{num1}</div>
    <div>{num2}</div>  
      <button onClick={handleAddition}>Addtion</button><br />
      <button onClick={handleSubtraction}>Subtraction</button><br />
      <button onClick={handleDivision}>Division</button><br />
      <button onClick={handleMultiplication}>Multiplication</button><br />
    </div>
  );
}

export default App;
