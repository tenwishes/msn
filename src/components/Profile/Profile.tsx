import React from 'react'
import s from './profile.module.scss'
import {Posts} from "./Posts/Posts";
import {About} from "./About/About";

export function Profile() {
    return (
        <div className={s.content}>
            <About/>
            <Posts/>
        </div>
    )
}

