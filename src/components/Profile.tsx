import React from 'react'
import styles from '../scss/profile.module.scss'
import icon_dob from '../img/icon/profile/dob.svg'
import icon_city from '../img/icon/profile/city.svg'
import icon_link from '../img/icon/profile/link.svg'
import icon_education from '../img/icon/profile/education.svg'

export function Profile() {
    return (
        <div className={styles.content}>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src="https://i.pinimg.com/564x/4a/49/a8/4a49a8327e18895d9db2f94b18885de2.jpg" alt="avatar" />
                    <br />
                    <button>Edit</button>
                </div>
                <div className={styles.info}>
                <span>Aiya Abe</span>
                    <ul className={styles.info__list}>
                        <li><img src={icon_dob} alt=""/>Date of birth: 21.12.1999</li>
                        <li><img src={icon_city} alt=""/>City: Tokyo</li>
                        <li><img src={icon_education} alt=""/>Education: TPT</li>
                        <li><img src={icon_link} alt=""/>Website: hella.xyz</li>
                    </ul>
                </div>
            </div>
            <div className={styles.posts}>
                <div className={styles.posts__add}>
                    Coming soon...
                </div>
                <div className={styles.posts__post}>
                    <span>Aiya Abe</span>
                    <p>sadasdasdas</p>
                </div>
                <div className={styles.posts__post}>
                    <span>Aiya Abe</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}