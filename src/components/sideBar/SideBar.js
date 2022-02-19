import React from "react";
import styles from "./SideBar.module.css";
import {ReactComponent as Logo} from "./../../media/icons/logo.svg";
import {ReactComponent as MainChartIcon} from "./../../media/icons/main_chart.svg";
import {ReactComponent as UdalenkaIcon} from "./../../media/icons/udalenka.svg";
import {Link} from "react-router-dom";

export const SideBar = () => {
    return (
        <nav>
            <div className={`container ${styles.logo}`}>
                <Logo/>
            </div>
            <ul className={styles.sidebarMenu}>
                <li className={styles.active}>
                    <Link to="asd">
                        <MainChartIcon/>
                        <span>Основной график</span>
                    </Link>
                </li>
                <li>
                    <Link to="asd">
                        <UdalenkaIcon/>
                        <span>Удаленка</span>
                    </Link>
                </li>
                <li>Переработки и ночные работы</li>
                <li>Список сотрудников</li>
            </ul>
        </nav>
    )
};