import React from 'react';
import 'normalize.css';
import './index.css';
import {renderEntireTree} from "./render";
import {state} from "./redux/state";

renderEntireTree(state);

