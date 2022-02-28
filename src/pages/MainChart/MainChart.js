import React from "react";
import styles from "./MainChart.module.css";

export const MainChart = () => {
    return (
        <div className={`${styles.mainChart}`}>
            <div className={styles.searchBar}>
                <div className={styles.dateFieldBlock}>
                    <fieldset>
                        <legend>Дата</legend>
                        <input type="month"/>
                    </fieldset>
                </div>
                <div className={styles.searchFieldBlock}>
                    <fieldset>
                        <legend>Поиск</legend>
                        <input type="text" placeholder="Имя, инициалы, должность"/>
                    </fieldset>
                </div>
                <div className={styles.buttonBlock}>
                    <button className="btn btn-main">Сохранить</button>
                </div>
                <div className={styles.buttonBlock}>
                    <button className="btn btn-secondary">Сохранить в excel</button>
                </div>
            </div>
            <div className="wrapper">
                <div className={styles.helpBar}>
                    <div className={styles.helps}>
                        <div className={styles.workedOut}><span className={styles.commonSign}>P</span></div>
                        <span className={styles.helpsTitle}>Отработано</span>
                    </div>
                    <div className={styles.helps}>
                        <div className={styles.mission}><span className={styles.commonSign}>К</span></div>
                        <span className={styles.helpsTitle}>Командировочные</span>
                    </div>
                    <div className={styles.helps}>
                        <div className={styles.sickLeave}><span className={styles.commonSign}>Б</span></div>
                        <span className={styles.helpsTitle}>Больничные</span>
                    </div>
                    <div className={styles.helps}>
                        <div className={styles.furlough}><span className={styles.commonSign}>О</span></div>
                        <span className={styles.helpsTitle}>Отпуск</span>
                    </div>
                    <div className={styles.helps}>
                        <div className={styles.coefficient}><span className={styles.commonSign}>К.Э</span></div>
                        <span className={styles.helpsTitle}>Коэффициент</span>
                    </div>
                </div>
            </div>
        </div>
    )
};