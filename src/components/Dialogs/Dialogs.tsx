import React from "react";
import s from './Dialogs.module.scss'
import {Companion} from "./Companion/Companion";
import {Message} from "./Message/Message";
import {MessagesType} from "../../redux/state";
import {DialogsType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export function Dialogs(props: DialogsPropsType) {
    const dialogs = props.dialogs
    const messages = props.messages

    return (
        <div className={s.dialogs}>
            <ul className={s.companions}>
                {
                    dialogs.map((u) => {
                        return (
                            <li key={u.id}>
                                <Companion id={u.id} name={u.name} surname={u.surname} avatar={u.avatar} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className={s.messages}>
                {
                    messages.map((m) => {
                        return (
                            <Message id={m.id} message={m.message} key={m.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}