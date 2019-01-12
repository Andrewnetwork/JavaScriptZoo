import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { EnthusiasmAction } from './actions/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState,EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 3,
  languageName: 'TypeScript',
});

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
           <Provider store={store}>
              <Hello />
           </Provider>
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
