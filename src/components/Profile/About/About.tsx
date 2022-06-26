import React from "react";
import s from "./About.module.scss";
import icon_dob from "../../../img/icon/profile/dob.svg";
import icon_city from "../../../img/icon/profile/city.svg";
import icon_education from "../../../img/icon/profile/education.svg";
import icon_link from "../../../img/icon/profile/link.svg";

export function About() {
    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src="https://i.pinimg.com/564x/4a/49/a8/4a49a8327e18895d9db2f94b18885de2.jpg" alt="avatar"/>
                {/*<img src="https://i.pinimg.com/564x/5f/18/26/5f1826ce3a4924b9a86e1d9ce3f4e869.jpg" alt="avatar" />*/}
            </div>
            <div className={s.info}>
                <span>Aiya Abe</span>
                <ul className={s.info__list}>
                    <li><img src={icon_dob} alt=""/>Date of birth: 21.12.1999</li>
                    <li><img src={icon_city} alt=""/>City: Tokyo</li>
                    <li><img src={icon_education} alt=""/>Education: TPT</li>
                    <li><img src={icon_link} alt=""/>Website: hella.xyz</li>
                </ul>
            </div>
        </div>
    )
}