import React, { useState } from 'react';
import DisplayBox from './DisplayBox';

const CalculatorBox = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };


  return (
    <div className="calculator-ui">
      <DisplayBox value={input} />
      <div className="buttons">
  <div className="button-row">
    <div className="button-column">
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('0')}>0</button>
    </div>
    <div className="button-column">
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('.')}>.</button>
    </div>
    <div className="button-column">
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={handleCalculate} className="button-equal">=</button>
    </div>
    <div className="button-column">
    <input data-testid="input" value={input} readOnly />
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={handleClear} className="button-clear">C</button>
       </div>
      </div>
      </div>
    </div>
  );
};

export default CalculatorBox;


