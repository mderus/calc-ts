import {ChangeEvent, useState} from 'react';
import {CalculatorHistory} from './CalculatorHistory';
import {CalculatorInputs} from './CalculatorInputs';
import {CalculatorResult} from './CalculatorResult';
import {CalculatorButtons} from './CalculatorButtons';

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

const Calculator = () => {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [result, setResult] = useState<number | string>('');
  const [history, setHistory] = useState<string[]>([]);

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFirst(Number(e.target.value));
  };

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSecond(Number(e.target.value));
  };

  const addToHistory = (line: string) => {
    setHistory((prevHistory) => [...prevHistory, line]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const setOperationResult = (operation: Operation) => {
    switch (operation) {
      case Operation.ADD: {
        const operationResult = first + second;
        setResult(operationResult);
        addToHistory(`Added ${first} to ${second} and got ${operationResult}`);
        break;
      }
      case Operation.SUBTRACT: {
        const operationResult = first - second;
        setResult(operationResult);
        addToHistory(
          `Subtracted ${first} from ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.MULTIPLY: {
        const operationResult = first * second;
        setResult(operationResult);
        addToHistory(
          `Multiplied ${first} by ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          setResult('You must not divide by 0!');
          addToHistory(
            `Tried to divide ${first} by ${second} but you cannot divide by 0!`
          );
        } else {
          const operationResult = first / second;
          setResult(operationResult);
          addToHistory(
            `Divided ${first} by ${second} and got ${operationResult}`
          );
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <CalculatorInputs
        handleFirstChange={handleFirstChange}
        handleSecondChange={handleSecondChange}
      />
      <CalculatorResult result={result} />
      <CalculatorButtons
        history={history}
        setOperationResult={setOperationResult}
        clearHistory={clearHistory}
      />
      <CalculatorHistory history={history} />
    </>
  );
};

export {Calculator};
