import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    const state = props.state
    return (
        <BrowserRouter>
                <Header/>
                <div className='wrapper'>
                    <Sidebar/>
                    <Route path='/dialogs'>
                        <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />
                    </Route>
                    <Route path='/profile'>
                        <Profile posts={state.profilePage.posts}/>
                    </Route>
                    <Route path='/news'>
                        <News />
                    </Route>
                    <Route path='/music'>
                        <Music />
                    </Route>
                    <Route path='/settings'>
                        <Settings />
                    </Route>
                </div>
        </BrowserRouter>
    );
}

export default App;
