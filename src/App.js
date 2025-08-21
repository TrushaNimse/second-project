import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [10, 25, 30, 45, 50]
  let num=[1,2,3,4,5,6,7,8,9,10]
  
  return (
  
  <div>{arr.map((singleElement)=>{
     return <div> {num.map((singleTable)=>{
      return<span>{singleElement*singleTable +"  "}</span>  
      })}</div>
    })}
  </div>
      );
}

export default App;
