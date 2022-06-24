import React from 'react'
import styles from '../scss/sidebar.module.scss'
import icon_profile from '../img/icon/sidebar/profile.svg'
import icon_message from '../img/icon/sidebar/message.svg'
import icon_news from '../img/icon/sidebar/news.svg'
import icon_music from '../img/icon/sidebar/music.svg'
import icon_settings from '../img/icon/sidebar/settings.svg'

export function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.sidebar__item}>
                <a href="/"><img src={icon_profile} alt="" /><span>Profile</span></a>
            </div>
            <div className={styles.sidebar__item}>
                <a href="/"><img src={icon_message} alt="" /><span>Messages</span></a>
            </div>
            <div className={styles.sidebar__item}>
                <a href="/"><img src={icon_news} alt="" /><span>Messages</span></a>
            </div>
            <div className={styles.sidebar__item}>
                <a href="/"><img src={icon_music} alt="" /><span >Music</span></a>
            </div>
            <div className={styles.sidebar__item}>
                <a href="/"><img src={icon_settings} alt="" /><span>!!!Settings</span></a>
            </div>
        </nav>
    )
}