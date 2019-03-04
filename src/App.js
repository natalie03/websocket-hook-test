import configureStore from './store';
import { Provider } from 'react-redux';
import React from 'react';
import { ApplicationLayout } from '_containers';

import './index.css';

const App = () => (
  <Provider store={configureStore()}>
    <div className="App">
      <ApplicationLayout />
    </div>
  </Provider>
);

export default App;
