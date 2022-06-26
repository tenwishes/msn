import React from "react";
import s from './Dialogs.module.scss'
import {Companion, CompanionPropsType} from "./Companion/Companion";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    users: CompanionPropsType[]
}

export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={s.dialogs}>
            <div className={s.companions}>
                {
                    props.users.map( (el, index) => {
                        return (
                            <>
                                <Companion
                                    id={el.id}
                                    name={el.name}
                                    surname={el.surname}
                                    avatar={el.avatar}
                                />
                            </>
                        )
                    })
                }
            </div>
            <div className={s.messages}>
                <Message
                    text={"Lorksdnfakhjshgsdfjhgjkdfhkldfjhglkjfh"}
                />
                <Message
                    text={"hay"}
                />
                <Message
                    text={"Huy"}
                />
            </div>
        </div>
    )
}