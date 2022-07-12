import React from 'react'
import s from './profile.module.scss'
import {Posts} from "./Posts/Posts";
import {About} from "./About/About";
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (name: string, text: string) => void
}

export function Profile(props: ProfilePropsType) {
    const posts = props.posts
    return (
        <div className={s.content}>
            <About/>
            <Posts
                posts={posts}
                addPost={props.addPost}
            />
        </div>
    )
}

