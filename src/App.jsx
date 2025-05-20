//import { useState } from 'react'
import './App.css';
import React from 'react';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <Timer initialMinutes={25}/>
     
    </div>
  );
}

export default App;
