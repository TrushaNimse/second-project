import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [10, 20, 30, 40, 50]
  
  return (
    <div>
      <div>{arr}</div>
      <div>
     {arr.map((singleElement)=>{
      return <div>{singleElement*2}</div>
    
     })} 
    </div>
    </div>
      );
}

export default App;
