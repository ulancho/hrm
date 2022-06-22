import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEmployeeBy1c} from "../../../../store/actions/actions";
import {isEmptyObject} from "../../../../helpers";
import styles from "./UserCard.module.css";

const UserCard = ({id1c}) => {
    const userData = useSelector(state => state.staff.employee);
    const dispatch = useDispatch();

    const addEmployee = () => {
        dispatch(addEmployeeBy1c(id1c))
    }

    return (
        !isEmptyObject(userData) ? <div className={styles.foundUserBar}>
            <div className={styles.emplCard}>
                <div className={styles.labels}>
                    <ul>
                        <li>Ф.И.О:</li>
                        <li>Должность:</li>
                        <li>Email:</li>
                    </ul>
                </div>
                <div className={styles.data}>
                    <ul>
                        <li>{userData.FullName}</li>
                        <li>{userData.Position}</li>
                        <li>{userData.Mail}</li>
                    </ul>
                </div>
            </div>
            <button onClick={addEmployee} className="btn btn-main">Добавить</button>
        </div> : null
    )
}


export default UserCard;