import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [10, 25, 30, 45, 50]
  
  return (
    <div>
      {arr.map((singleElement)=>{
        if(singleElement%2===0){
          return<div><i>{singleElement*2}</i></div>
        }
        else{
          return<b>{singleElement*2}</b>
        }
      })}
    </div>
      );
}

export default App;
