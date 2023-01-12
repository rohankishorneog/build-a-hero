import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName]=useState("");
  const [age, setAge]=useState(0);
  const [height, setHeight]=useState(0);
  const [superPower, setSuperpower]=useState("");
  const [display, setDisplay]=useState(false);
  return (
    <div className="App">
      <div>
      <h1>Build A Hero</h1>
      <label>Name</label>
      <input type="text" style={{margin : 10}} onChange={(event)=>{setName(event.target.value)}}/>
      <label>Age</label>
      <input type="Number" style={{margin : 10}} onChange={(event)=>{setAge(event.target.value)}}/>
      <label>Height</label>
      <input type="Number" style={{margin : 10}}  onChange={(event)=>{setHeight(event.target.value)}}/>
      <label>SuperPower</label>
      <input type="text" style={{margin : 10}} onChange={(event)=>{setSuperpower(event.target.value)}}/>
      </div>
      <div>
        <button onClick={()=>setDisplay(true)}>Display Charecter</button>
      </div>
      <div><h1>Hero Info</h1></div>
      {display &&(
        <ul>
          <li>Name:{name}</li>
          <li>Age: {age}</li>
          <li>height: {height}</li>
          <li>SuperPower: {superPower}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
