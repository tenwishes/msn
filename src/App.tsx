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

let users = [
    {
        id: 1,
        name: "Chae-Won",
        surname: "",
        avatar: "https://i.pinimg.com/564x/6a/e1/0e/6ae10ef5824db55b486df2a6054233b6.jpg"
    },
    {
        id: 2,
        name: "Chae-Yeong",
        surname: "",
        avatar: "https://i.pinimg.com/564x/f4/cb/0b/f4cb0b650a90030b247921ce3ef954d1.jpg"
    },
    {
        id: 3,
        name: "Eun",
        surname: "",
        avatar: "https://i.pinimg.com/564x/5c/47/67/5c4767e1606e294f4d3927ff22464085.jpg"
    },
    {
        id: 4,
        name: "Hana",
        surname: "",
        avatar: "https://i.pinimg.com/564x/27/49/17/274917d78c88616fcae2a70ecf35f2ce.jpg"
    },
    {
        id: 5,
        name: "Gyeong-Suk",
        surname: "",
        avatar: "https://i.pinimg.com/564x/45/29/cb/4529cbca50a7e7e27cfc7127050b946f.jpg"
    },
    {
        id: 6,
        name: "Ha-Eun",
        surname: "",
        avatar: "https://i.pinimg.com/564x/3d/c1/30/3dc1308a9628070f57cf947cbb9499ad.jpg"
    },
    {
        id: 7,
        name: "Ha-Yun",
        surname: "",
        avatar: "https://i.pinimg.com/564x/77/55/4d/77554d34a8738ee1509932d683dae791.jpg"
    },
    {
        id: 8,
        name: "Jeong",
        surname: "",
        avatar: "https://i.pinimg.com/564x/70/73/12/707312781b4a191e976eec05bc56e7f5.jpg"
    }
]

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className='wrapper'>
                    <Sidebar/>
                    <Route path='/dialogs'>
                        <Dialogs users={users} />
                    </Route>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
