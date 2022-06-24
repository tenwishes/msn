import React from 'react'
import styles from '../scss/profile.module.scss'
import icon_dob from '../img/icon/profile/dob.svg'
import icon_city from '../img/icon/profile/city.svg'
import icon_link from '../img/icon/profile/link.svg'
import icon_education from '../img/icon/profile/education.svg'

export function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__information}>
                <div className={styles.profile__information_main}>

                    <div className={styles.profile__information__avatar}>
                        <div className={styles.profile__information__avatar_image}>
                            <img className={styles.profile__information__avatar__photo}
                                 src="https://i.pinimg.com/564x/09/a0/ed/09a0edcdd5310425b884b558f2503aff.jpg" alt=""/>
                        </div>
                        <button>Edit</button>
                    </div>

                    <div className={styles.profile__information__data}>
                        <div className={styles.profile__information__data__name}>陽葵</div>
                        <div className={styles.profile__information__data__info}>
                            <ul>
                                <li><img src={icon_dob} alt=""/><span>Date of birth: 15.12.1999</span></li>
                                <li><img src={icon_city} alt=""/><span>City: Tokyo</span></li>
                                <li><img src={icon_education} alt=""/><span>Education: 短期大学 tanki daigaku</span></li>
                                <li><img src={icon_link} alt=""/><span>Website: <a href="/">hella.xyz</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.profile__information__posts}>
                    <div className={styles.profile__information__posts__add}>
                        ADD
                    </div>
                    <div className={styles.profile__information__posts__post}>
                        MY POST
                    </div>
                </div>
            </div>
        </div>
    )
}