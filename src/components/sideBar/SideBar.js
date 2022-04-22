import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./SideBar.module.css";

import {ReactComponent as MainChartLightIcon} from "../../media/icons/main-chart-light.svg";
import {ReactComponent as MainChartDarkIcon} from "../../media/icons/main-chart-dark.svg";

import {ReactComponent as RemoteLightIcon} from "../../media/icons/remote-light.svg";
import {ReactComponent as RemoteDarkIcon} from "../../media/icons/remote-dark.svg";

import {ReactComponent as ProcessingDarkIcon} from "../../media/icons/processing-dark.svg";
import {ReactComponent as ProcessingLightIcon} from "../../media/icons/processing-light.svg";

import {ReactComponent as FormKeLightIcon} from "../../media/icons/form-ke-light.svg";
import {ReactComponent as FormKeDarkIcon} from "../../media/icons/form-ke-dark.svg";

import {ReactComponent as StaffLightIcon} from "../../media/icons/staff-light.svg";
import {ReactComponent as StaffDarkIcon} from "../../media/icons/staff-dark.svg";

export const SideBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.sidebarMenu}>
                <li>
                    <NavLink to="/main_chart"
                             className={({isActive}) => (isActive ? styles.active : '')}
                    >
                        <MainChartLightIcon className={styles.lightIcon}/>
                        <MainChartDarkIcon className={styles.darkIcon}/>
                        <span>Основной график</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/remote"
                             className={({isActive}) => (isActive ? styles.active : '')}>
                        <RemoteLightIcon className={styles.lightIcon}/>
                        <RemoteDarkIcon className={styles.darkIcon}/>
                        <span>Удаленка</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/processing"
                             className={({isActive}) => (isActive ? styles.active : '')}>
                        <ProcessingLightIcon className={styles.lightIcon}/>
                        <ProcessingDarkIcon className={styles.darkIcon}/>
                        <span>Переработки и ночные работы</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/staff_rate"
                             className={({isActive}) => (isActive ? styles.active : '')}>
                        <FormKeLightIcon className={styles.lightIcon}/>
                        <FormKeDarkIcon className={styles.darkIcon}/>
                        <span>Форма КЭ</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/employees"
                             className={({isActive}) => (isActive ? styles.active : '')}>
                        <StaffLightIcon className={styles.lightIcon}/>
                        <StaffDarkIcon className={styles.darkIcon}/>
                        <span>Список сотрудников</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};