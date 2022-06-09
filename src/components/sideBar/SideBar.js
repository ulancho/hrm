import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./SideBar.module.css";
import {routes} from "./routes";


export const SideBar = () => {
    const pages = JSON.parse(localStorage.getItem('user')).pages;
    console.log(pages);

    return (
        <nav className={styles.nav}>
            <ul className={styles.sidebarMenu}>
                <li>
                    {
                        pages.map(item => {
                            return (
                                    routes[item.name] ? <NavLink to={`/${routes[item.name].route}`}
                                                                  className={({isActive}) => (isActive ? styles.active : '')}
                                    >
                                        {routes[item.name].lightIcon}
                                        {routes[item.name].darkIcon}
                                        <span>{routes[item.name].title}</span>
                                    </NavLink> : null

                            )
                        })
                    }
                </li>
            </ul>
        </nav>
    )
};