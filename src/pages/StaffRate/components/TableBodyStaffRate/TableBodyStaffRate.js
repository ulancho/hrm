import React from 'react';
import styles from "./TableBodyStaffRate.module.css"
import classNames from "classnames";
import {auto_grow} from "../../../../helpers";

const TableRow = () => {
    return (
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
                <textarea placeholder="Отчет о проделанной работе за месяц" onBlur={()=>console.log('123')} onInput={auto_grow}/>
            </div>
            <div className={classNames(styles.ratio1, styles.border)}>
                <span className={classNames(styles.ratioNum1)}>0.2</span>
            </div>
            <div className={classNames(styles.ratio3, styles.border)}>
                <span className={classNames(styles.ratioNum2)}>0.2</span>
            </div>
        </div>
    )
}

const TableBodyStaffRate = () => {
    return (
        <div className="animate__animated animate__zoomIn animate__fast">
            <TableRow/>
        </div>
    );
};

export default TableBodyStaffRate;