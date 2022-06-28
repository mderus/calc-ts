import {ChangeEvent} from 'react';

interface Props {
  handleFirstChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorInputs = ({handleFirstChange, handleSecondChange}: Props) => {
  return (
    <>
      <input type='number' onChange={handleFirstChange} />
      <input type='number' onChange={handleSecondChange} />
    </>
  );
};

export {CalculatorInputs};
