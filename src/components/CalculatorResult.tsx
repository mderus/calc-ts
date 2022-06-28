interface Props {
  result: number | string;
}

const CalculatorResult = ({result}: Props) => {
  return <h1>{result}</h1>;
};

export {CalculatorResult};
