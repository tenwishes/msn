import React from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Profile} from "./components/Profile";

function App() {
    return (
        <div>
            <Header/>
            <div className='wrapper'>
                <Sidebar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
