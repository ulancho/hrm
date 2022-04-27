import React, {useState} from 'react';
import styles from "./TableBodyStaffRate.module.css"
import classNames from "classnames";
import {auto_grow} from "../../../../helpers";

const TableRow = ({item, index}) => {
    const [i, setI] = useState(item);

    const changeRatio = (event) => {
       i[event.target.name] = event.target.value;
       setI({...i});
    }

    return (
        <div className={styles.tableBody}>
            <div className={classNames(styles.num, styles.border)}>
                <span>{index+1}</span>
            </div>
            <div className={classNames(styles.name, styles.border)}>
                <p>{i.full_name}</p>
                <p>{i.position}</p>
            </div>
            <div className={classNames(styles.ratio1, styles.border)}>
                <input
                    name="department_ratio"
                    onChange={changeRatio}
                    className={classNames(styles.ratioNum1)}
                    value={i.department_ratio}/>
            </div>
            <div className={classNames(styles.ratio2, styles.border)}>
                <input
                    name="efficiency_ratio"
                    onChange={changeRatio}
                    className={classNames(styles.ratioNum1)}
                    value={i.efficiency_ratio}/>
            </div>
            <div className={classNames(styles.comment, styles.border)}>
                <textarea
                    placeholder="Отчет о проделанной работе за месяц"
                    onBlur={() => console.log('123')}
                    onInput={auto_grow}/>
            </div>
            <div className={classNames(styles.ratio1, styles.border)}>
                <input
                    name="revenue_ratio"
                    onChange={changeRatio}
                    className={classNames(styles.ratioNum1)}
                    value={i.revenue_ratio}/>
            </div>
            <div className={classNames(styles.ratio3, styles.border)}>
                <input
                    name="total_ratio"
                    onChange={changeRatio}
                    className={classNames(styles.ratioNum2)}
                    value={i.total_ratio}
                />
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
                        <TableRow key={index} item={item} index={index}/>
                    )
                }) : <h3 id="not-found" className="text-center">Данные не найдены</h3>
            }
        </div>
    );
};

export default TableBodyStaffRate;