import React from "react";
import s from './Message.module.scss'

export type MessagePropsType = {
    id: number
    message: string
}

export function Message(props: MessagePropsType) {
    const id = props.id
    const message = props.message
    return (
        <div className={s.message} key={id}>
            {message}
        </div>
    )
}