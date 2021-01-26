import { registerRootComponent } from 'expo';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import reducer from './src/reduxStore';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "@reduxjs/toolkit";

const reduxStore = createStore(reducer, applyMiddleware(thunk));

class Main extends React.Component {
  render() {
    return <StoreProvider store={reduxStore}>
              <PaperProvider>
                <App />
              </PaperProvider>
          </StoreProvider>
  }
}

registerRootComponent(Main);
