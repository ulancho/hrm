import React from 'react';
import styles from "./TableBodyStaffRate.module.css"
import classNames from "classnames";
import {auto_grow} from "../../../../helpers";

const TableRow = ({item}) => {
    return (
        <div className={styles.tableBody}>
            <div className={classNames(styles.num, styles.border)}>
                <span>1</span>
            </div>
            <div className={classNames(styles.name, styles.border)}>
                <p>{item.full_name}</p>
                <p>{item.position}</p>
            </div>
            <div className={classNames(styles.ratio1, styles.border)}>
                <span className={classNames(styles.ratioNum1)}>{item.department_ratio}</span>
            </div>
            <div className={classNames(styles.ratio2, styles.border)}>
                <span className={classNames(styles.ratioNum1)}>{item.efficiency_ratio}</span>
            </div>
            <div className={classNames(styles.comment, styles.border)}>
                <textarea placeholder="Отчет о проделанной работе за месяц" onBlur={()=>console.log('123')} onInput={auto_grow}/>
            </div>
            <div className={classNames(styles.ratio1, styles.border)}>
                <span className={classNames(styles.ratioNum1)}>{item.revenue_ratio}</span>
            </div>
            <div className={classNames(styles.ratio3, styles.border)}>
                <span className={classNames(styles.ratioNum2)}>{item.total_ratio}</span>
            </div>
        </div>
    )
}

const TableBodyStaffRate = ({items}) => {
    return (
        <div className="animate__animated animate__zoomIn animate__fast">
            {
                items.count > 0 ? items.data.map((item,index)=>{
                    return (
                        <TableRow key={index} item={item}/>
                    )
                }) : <h3 id="not-found" className="text-center">Данные не найдены</h3>
            }
        </div>
    );
};

export default TableBodyStaffRate;