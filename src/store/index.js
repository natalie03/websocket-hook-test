import { createStore, compose } from 'redux';
import reducers from '_reducers';

export default function configureStore(state = {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers();
  return createStore(reducers, state, enhancers);
}
