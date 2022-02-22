import React from "react";
import styles from "./Employees.module.css";
import {ReactComponent as SearchIcon} from "./../../media/icons/search.svg";

export const Employees = () => {
    return (
        <div className={styles.employess}>
            <div className={styles.searchBar}>
                <div className={styles.fieldBlock}>
                    <fieldset>
                        <legend>Отдел</legend>
                        <select>
                            <option value="0">Выбрать</option>
                            <option value="0">ГД/Отдел разработок</option>
                        </select>
                    </fieldset>
                </div>
                <div className={styles.fieldBlock}>
                    <fieldset>
                        <legend>Поиск</legend>
                        <div className={styles.iconInside}>
                            <input className={styles.input} type="text" placeholder="Имя, инициалы, должность"/>
                            <SearchIcon className={styles.icon}/>
                        </div>
                    </fieldset>
                </div>
                <div className={styles.buttonBlock}>
                    <button className="btn btn-main">Добавить сотрудника</button>
                </div>
            </div>
            <div className={styles.tableBar}>

            </div>
        </div>
    )
};