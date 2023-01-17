import './App.css';
import logo from './logo.png';

function Text(){
  return (
    <div className="textArea">
      <input type="text" className="text"/>
    </div>
  )
}

function Button(){
  return (
    <div className="btn">
      
      <button type='submit' className="btn1">Google Search </button><button type='submit' className="btn2">I am feeling lucky</button>
    </div>
  )
}

function Div(){
  return (
    <div className="div">
      <p>Google ka text Notes</p>
    </div>
  )
}

function App() {
  return (
    <div className="parent">
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <Text/>
    <Button/>
    <Div/>
     </div>
   
  );
}

export default App;
