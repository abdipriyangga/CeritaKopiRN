import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import reducers from './reducers';

export default () => {
  const store = createStore(reducers, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);
  return { store, persistor };
};
