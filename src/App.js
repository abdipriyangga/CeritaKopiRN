/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import reduxConfig from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const redux = reduxConfig();
const App = () => {
  return (
    <>
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
