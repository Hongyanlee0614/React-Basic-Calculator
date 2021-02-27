import { useState } from "react";

const Calculator = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  //default is '+'
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);
  const handleCalculate = () => {
    if (operation === "+") {
      setResult(parseInt(valueA) + parseInt(valueB));
    } else if (operation === "-") {
      setResult(parseInt(valueA) - parseInt(valueB));
    } else if (operation === "x") {
      setResult(parseInt(valueA) * parseInt(valueB));
    } else {
      setResult(parseInt(valueA) / parseInt(valueB));
    }
  };
  return (
    <div id="calculator">
      <h1 id="title">Simple Calculator</h1>
      <h3 id="result">Result: {result}</h3>
      <div id="inputGroup">
        <input
          id="valueA"
          type="text"
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
        />
        <input
          id="valueB"
          type="text"
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
        />
      </div>
      <div id="buttonGroup">
        <button id="add" onClick={() => setOperation("+")}>
          +
        </button>
        <button id="subtract" onClick={() => setOperation("-")}>
          -
        </button>
        <button id="multiply" onClick={() => setOperation("x")}>
          x
        </button>
        <button id="divide" onClick={() => setOperation("/")}>
          /
        </button>
      </div>
      <button id="calculate" onClick={handleCalculate}>
        Calculate
      </button>
    </div>
  );
};

export default Calculator;
