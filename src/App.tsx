import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (name: string, text: string) => void
}

function App(props: AppPropsType) {
    const {dialogsPage, profilePage} = props.state
    return (
        <>
            <Header/>
            <div className='wrapper'>
                <Sidebar/>
                <Route path='/dialogs'>
                    <Dialogs
                        dialogs={dialogsPage.dialogs}
                        messages={dialogsPage.messages} />
                </Route>
                <Route path='/profile'>
                    <Profile
                        posts={profilePage.posts}
                        addPost={props.addPost}/>
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
        </>
    );
}

export default App;
