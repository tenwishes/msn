import React from 'react'
import s from './profile.module.scss'
import {Posts} from "./Posts/Posts";
import {About} from "./About/About";
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsType>
}

export function Profile(props: ProfilePropsType) {
    const posts = props.posts
    return (
        <div className={s.content}>
            <About/>
            <Posts posts={posts}/>
        </div>
    )
}

