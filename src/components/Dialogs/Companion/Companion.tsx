import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Companion.module.scss";
import {DialogsType} from "../../../redux/state";

type CompanionPropsType = DialogsType

export function Companion(props: CompanionPropsType) {
    let path = "/dialogs/" + props.id
    let name = props.name + " " + props.surname

    return (
        <div className={s.companion}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.avatar} alt={props.name}/>
                <span>{name}</span>
            </NavLink>
        </div>
    )
}