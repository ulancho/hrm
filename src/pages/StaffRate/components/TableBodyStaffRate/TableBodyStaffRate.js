import React from 'react';
import styles from "./TableBodyStaffRate.module.css"
import classNames from "classnames";

const TableBodyStaffRate = () => {
    return (
        <div className="animate__animated animate__zoomIn animate__fast">
            <div className={styles.tableBody}>
                <div className={classNames(styles.num, styles.border)}>
                    <span>1</span>
                </div>
                <div className={classNames(styles.name, styles.border)}>
                    <p>Абасова Айгерим Толоновна </p>
                    <p>Специалист по поддержке ПО</p>
                </div>
                <div className={classNames(styles.ratio1, styles.border)}>
                    <span className={classNames(styles.ratioNum1)}>0.2</span>
                </div>
                <div className={classNames(styles.ratio2, styles.border)}>
                    <span className={classNames(styles.ratioNum1)}>0.2</span>
                </div>
                <div className={classNames(styles.comment, styles.border)}>
                    <textarea></textarea>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default TableBodyStaffRate;