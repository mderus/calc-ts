interface Props {
  history: string[];
}

const CalculatorHistory = ({history}: Props) => {
  return (
    <ul>
      {history && history.map((line, index) => <li key={index}>{line}</li>)}
    </ul>
  );
};

export {CalculatorHistory};
