import {Operation} from './Calculator';

interface Props {
  history: string[];
  clearHistory: () => void;
  setOperationResult: (operation: Operation) => void;
}

const CalculatorButtons = ({
  history,
  clearHistory,
  setOperationResult,
}: Props) => {
  return (
    <>
      <button onClick={() => setOperationResult(Operation.ADD)}>+</button>
      <button onClick={() => setOperationResult(Operation.SUBTRACT)}>-</button>
      <button onClick={() => setOperationResult(Operation.MULTIPLY)}>*</button>
      <button onClick={() => setOperationResult(Operation.DIVIDE)}>/</button>
      <button onClick={clearHistory}>Clear history [{history.length}]</button>
    </>
  );
};

export {CalculatorButtons};
