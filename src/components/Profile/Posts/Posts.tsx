import React from 'react'
import styles from './posts.module.scss'
import {PostsType} from "../../../redux/state";

type PostsPropsType = {
    posts: Array<PostsType>
}

export function Posts(props: PostsPropsType) {
    const posts = props.posts
    return (
        <div className={styles.posts}>
            {
                posts.map((p, index) => {
                    return (
                        <div className={styles.posts__post} key={index} >
                            <span>{p.name}</span>
                            <p>{p.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}