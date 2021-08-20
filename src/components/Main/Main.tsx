import { Example } from '../Example/Example';
import { ReduxExample } from '../ReduxExample/ReduxExample';

export const Main: React.FC = () => {
  return (
    <div className="main">
      <Example text={'Счетчик'} />
      <Example />
      <ReduxExample />
    </div>
  );
};
