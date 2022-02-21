import React from "react";
import styles from "./MainChart.module.css";

export const MainChart = () => {
    return (
        <div className={styles.mainChart}>
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
                        <input type="text"/>
                    </fieldset>
                </div>
                <div className={styles.buttonBlock}>
                    <button className="btn btn-main">Сохранить</button>
                </div>
                <div className={styles.buttonBlock}>
                    <button className="btn btn-secondary">Сохранить в excel</button>
                </div>
            </div>
        </div>
    )
};