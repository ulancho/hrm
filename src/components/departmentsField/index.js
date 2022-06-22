import React, {useEffect} from "react";
import {getDepartments} from "../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./index.module.css";

const DepartmentsField = ({onGetDepartment}) => {
    const dispatch = useDispatch();
    const departmentsList = useSelector(state => state.staff.departmentsList);

    useEffect(() => {
        dispatch(getDepartments());
    }, [])

    return (
        <fieldset>
            <legend>Отдел</legend>
            <select
                onChange={onGetDepartment}
                className={styles.select}
                defaultValue="-1"
            >
                <option value="0">Выбрать</option>
                <option value="-1">Все</option>
                {departmentsList.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
        </fieldset>
    )
}

export default DepartmentsField;