import React from 'react';
import styles from "./TableBodyRemote.module.css";
import {getDay} from "../../../../helpers";
import classNames from "classnames";

const TableBodyRemote = ({items}) => {
    const freeDayClass = (value) => value === 'В' ? 'freeDay' : '';

    /********************** обработчики для событий ********************/
    const onClickRow = (event, type) => {
        if (event.target.classList.contains('s') || event.target.classList.contains('menu') || event.target.classList.contains('hours-field')) return;
        const currentRow = event.currentTarget.parentNode;
        if (type === 1) {
            currentRow.nextElementSibling.classList.remove('d-none');
            currentRow.classList.add('d-none');
        } else {
            currentRow.previousElementSibling.classList.remove('d-none');
            currentRow.classList.add('d-none');
        }
    }

    const onContextCell = (event) => {
        event.preventDefault();
        event.currentTarget.lastElementChild.classList.toggle('active-cell');
        event.currentTarget.querySelector('.menu').classList.toggle('d-none');
    }

    /********************** доп. компоненты ********************/
    const OverallCell = () => {
        return (
            <div className={styles.allSum}>
                <div className={styles.square2}><span></span></div>
            </div>
        )
    }

    const OverallHours = ({hours}) => {
        return (
            <div className={styles.allSum}>
                <div className={styles.square2}><span>{hours}</span></div>
            </div>
        )
    }

    const RationCell = ({ratio = 0}) => {
        return (
            <div className={`${styles.coefficient}`}>
                <span>{ratio}</span>
            </div>
        )
    }

    return (
        items.count > 0 ?
            items.data.map((item, index) => {
                return (
                    <React.Fragment key={item.employee_id}>
                        {/*До клика*/}
                        <div className={styles.tableBarBody}>
                            <div className={styles.num}>
                                <span>{index + 1}</span>
                            </div>
                            <div onClick={(e) => {
                                onClickRow(e, 1)
                            }} className={styles.name}>
                                <p>{item.full_name}</p>
                                <p>{item.position?.title}</p>
                            </div>
                            <div onClick={(e) => {
                                onClickRow(e, 1)
                            }} className={`${styles.calendar} ${styles.table1}`}>
                                {
                                    item.days.map((d, indexD) => {
                                        return (
                                            <div key={indexD}
                                                 className={`${styles.square} ${styles[freeDayClass(d.value)]}`}>
                                                <span>{d.value}</span></div>
                                        )
                                    })
                                }
                            </div>
                            {/*Часы*/}
                            <OverallHours hours={item.overall?.remote_hours}/>
                            {/*Все*/}
                            <OverallCell/>
                            {/*Дни*/}
                            <RationCell ratio={item.overall?.ratio}/>
                        </div>
                        {/*После клика*/}
                        <div className={`${styles.tableBarBody} ${styles.table2} ${styles.tableBarBody2} d-none`}>
                            <div className={styles.num}>
                                <span>{index + 1}</span>
                            </div>
                            <div onClick={(e) => {
                                onClickRow(e, 2)
                            }} className={styles.name}>
                                <p>{item.full_name}</p>
                                <p>{item.position?.title}</p>
                            </div>
                            <div onClick={(e) => {
                                onClickRow(e, 2)
                            }} className={`${styles.calendar}`}>
                                {
                                    item.days.map((d, indexD) => {
                                        return (
                                            <div key={indexD} className={classNames('d', styles.square, styles[freeDayClass(d.value)])}>
                                                <span className="d">{getDay(d.date)}</span>
                                                <div/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/*Часы*/}
                            <OverallHours hours={item.overall?.remote_hours}/>
                            {/*Все*/}
                            <OverallCell/>
                            {/*Дни*/}
                            <RationCell ratio={item.overall?.ratio}/>
                        </div>
                    </React.Fragment>
                )
            }) : <h3 id="not-found" className="text-center">Данные не найдены</h3>
    )
};

export default TableBodyRemote;