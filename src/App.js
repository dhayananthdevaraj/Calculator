import React from 'react';
import DisplayBox from './components/DisplayBox';
import CalculatorBox from './components/CalculatorBox';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='display_size'>
        <DisplayBox />
        <CalculatorBox />
      </div>
    </div>
  );
}

export default App;


