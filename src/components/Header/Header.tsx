import React from 'react'
import styles from './header.module.scss'
import logo from '../../img/logo/logo.svg'

export function Header() {
    return (
        <div className={styles.header}>
            <header className={styles.header__content}>
                <div className={styles.logo_container}>
                    <img src={logo} alt=""/>
                </div>
                {/*<div className={styles.search__input}>*/}
                {/*    <div className={styles.search__input}>*/}
                {/*        <img src="" alt="a"/>*/}
                {/*        <input type="search" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.container__profile__image}>*/}
                {/*    <div className={styles.profile__image}>*/}
                {/*        <img src="" alt="" />*/}
                {/*        <div>^</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </header>
        </div>
    )
}