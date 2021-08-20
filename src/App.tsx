import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Main } from './components/Main/Main';
import { Modal } from './components/Modal/Modal';
import { ModalTestComponent } from './components/Modal/ModalTestComponent';

import 'antd/dist/antd.css';
import './scss/App.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Modal>
        <ModalTestComponent />
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Modal>
    </Provider>
  );
};
