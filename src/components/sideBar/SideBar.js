import React from "react";
import styles from "./SideBar.module.css";
import {ReactComponent as Logo} from "./../../media/icons/logo.svg";
import {ReactComponent as MainChartIcon} from "./../../media/icons/main_chart.svg";
import {ReactComponent as UdalenkaIcon} from "./../../media/icons/udalenka.svg";
import {ReactComponent as ProcessingIcon} from "./../../media/icons/processing.svg";
import {ReactComponent as FormKeIcon} from "./../../media/icons/ke.svg";
import {ReactComponent as StaffIcon} from "./../../media/icons/staff.svg";
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
                <li>
                    <Link to="asd">
                        <ProcessingIcon/>
                        <span>Переработки и ночные работы</span>
                    </Link>
                </li>
                <li>
                    <Link to="asd">
                        <FormKeIcon/>
                        <span>Форма КЭ</span>
                    </Link>
                </li>
                <li>
                    <Link to="asd">
                        <StaffIcon/>
                        <span>Список сотрудников</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};