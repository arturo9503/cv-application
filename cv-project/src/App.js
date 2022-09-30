import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form.js';
import Resume from './components/Resume.js';
import './App.css';

const welcome = "Welcome to React";

function App() {
  const [show,setShow]=React.useState(true)
  return (
    <div>
    <Welcome></Welcome>
    {
    show?<Form></Form>:null
    }
    <Resume></Resume>
    <div id='buttons'>
    {/* <button onClick={()=>setShow(true)}>Show</button>
    <button onClick={()=>setShow(false)}>Hide</button> */}
    </div>
    </div>

  );
}

class Welcome extends Component {
  render() {
    return (
      <h1 className="App-title">{welcome}</h1>
    )
  }
}


export default App;
