import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEmployeeBy1c} from "../../../../store/actions/actions";
import styles from "./AddUserModal.module.css";
import UserCard from "../UserCard/UserCard";

const AddUserModal = ({close}) => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);
    const notFoundEmployee = useSelector(state => state.staff.notFoundEmployee);

    /********************** обработчики для событий ********************/
    const clickSearch = () => {
        dispatch(getEmployeeBy1c(id))
    }

    const change1c = (e) => {
        setId(e.currentTarget.value);
        setDisableBtn(!e.currentTarget.value);
    }

    /********************** доп.компоненты ********************/
    const NotFound = () => {
        return (
            notFoundEmployee ? <div className={styles.notFoundUserBar}>
                <p>Сотрудник не найден</p>
            </div> : null
        )
    }

    return (
        <div className="modal">
            <div className="close-bar">
                <span className="close" onClick={close}>
                    &times;
                </span>
            </div>
            <div className="content">
                <div className={styles.addUserBar}>
                    <input onChange={change1c} value={id} type="text" placeholder="Введите идентификатор 1С:"/>
                    <button onClick={clickSearch} className="btn btn-main" disabled={disableBtn}>Поиск</button>
                </div>
                <UserCard id1c={id}/>
                <NotFound/>
            </div>
        </div>
    )
}

export default AddUserModal;