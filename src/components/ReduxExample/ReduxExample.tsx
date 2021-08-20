import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { addNumber } from 'src/redux';

export const ReduxExample: React.FC = () => {
  const defaultNumber = useSelector((state: RootStateOrAny) => state.example.defaultNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Number - {defaultNumber}</div>
      <button onClick={() => dispatch(addNumber())}>Add number</button>
      <button onClick={() => dispatch(addNumber(5))}>Add 5</button>
    </div>
  );
};
