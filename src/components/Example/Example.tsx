import { useState } from 'react';

interface Props {
  text?: string;
}

export const Example: React.FC<Props> = ({ text = 'Counter' }: Props) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="example">
      {text} - {counter}
      <button onClick={() => setCounter(counter + 1)} className="example__button">
        +1
      </button>
      <button onClick={() => setCounter(counter - 1)} className="example__button">
        -1
      </button>
    </div>
  );
};
