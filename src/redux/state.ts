import {useState} from "react";
import {renderEntireTree} from "../render";

export type MessagesType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
    name: string
    text: string
    likes: number
}
export type DialogsType = {
    id: number
    name: string
    surname: string
    avatar: string
}

export type profilePageType = {
    posts: Array<PostsType>
}
export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, name: "Aiya Abe", text: "I like sushi", likes: 1},
            {id: 2, name: "Aiya Abe", text: "<3",  likes: 0},
            {id: 3, name: "Aiya Abe", text: ":D",  likes: 2}
        ]
    },
    dialogsPage: {
        dialogs: [
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
            },
            {
                id: 9,
                name: "Hannah",
                surname: "Tejeda",
                avatar: "https://i.pinimg.com/564x/e3/3c/92/e33c922e79c9a75ad361c95c1c5e24bf.jpg"
            }
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello!"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "I'm fine!"},
        ]
    }
}

export const addPost = (name: string, text: string) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        name: name,
        text: text,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}