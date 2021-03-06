import React from 'react'
import styles from './posts.module.scss'
import {PostsType} from "../../../redux/state";

type PostsPropsType = {
    posts: Array<PostsType>
    addPost: (name: string, text: string) => void
}

export function Posts(props: PostsPropsType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const posts = props.posts
    const addPost = () => {
        let text = newPostElement.current?.value
        props.addPost("Aiya Abe", "text")
        // if (newPostElement.current?.value) {
        //     newPostElement.current?.value = '';
        // }
    }

    return (
        <div className={styles.posts}>
            <h1>My posts</h1>
            <div className={styles.posts__add}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {
                posts.map((p, index) => {
                    return (
                        <div className={styles.posts__post} key={index}>
                            <span>{p.name}</span>
                            <p>{p.text}</p>
                            <span>
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5141 1.27752C13.6543 0.456364 12.5247 5.6351e-05 11.3517 6.10352e-05C10.7262 0.000525685 10.1072 0.130881 9.53181 0.383323C8.95642 0.635765 8.43642 1.0051 8.00296 1.46923L8.00105 1.46727L7.99916 1.46921C7.56571 1.00509 7.04573 0.635763 6.47034 0.38333C5.89495 0.130897 5.27599 0.000551935 4.6505 9.6029e-05C3.41739 0.000110511 2.23477 0.504295 1.36281 1.40173C0.490858 2.29917 0.000990633 3.51636 0.000976562 4.78551C0.00141952 5.42928 0.128064 6.06633 0.373328 6.65854C0.618592 7.25075 0.977434 7.78593 1.42837 8.23205L1.42646 8.23401L8.00081 15.0005L14.5757 8.23347L14.5753 8.23303C15.0261 7.78659 15.3848 7.25109 15.6298 6.6586C15.8748 6.06611 16.0012 5.42883 16.0012 4.78491C16.0012 4.12636 15.8692 3.47489 15.6133 2.87129C15.3574 2.26768 14.9833 1.72493 14.5142 1.277L14.5141 1.27752Z" fill="#FF0000"/>
                                </svg>
                                {p.likes}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}