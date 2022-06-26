import React from "react";
import s from './Message.module.scss'

type MessagePropsType = {
    text: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}