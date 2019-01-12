import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './components/Hello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("hello renders without crashing",()=>{
  const div = document.createElement('div');
  ReactDOM.render(<Hello name="Test name" enthusiasmLevel={10} />, div);
  ReactDOM.unmountComponentAtNode(div);
});