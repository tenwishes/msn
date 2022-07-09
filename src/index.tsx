import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import {state} from "./redux/state";


ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);