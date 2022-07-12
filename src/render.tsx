import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";
import {StateType} from "./redux/state";

export let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
    </BrowserRouter>, document.getElementById('root')
);
}