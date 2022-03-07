import React, {useEffect} from "react";
import styles from "./Employees.module.css";
import {ReactComponent as SearchIcon} from "./../../media/icons/search.svg";
import userImg from "./user.png";
import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../../redux/actions";
import {IMAGE_URL} from "../../constants";

const AddUserModal = ({close}) => {
    return (
        <div className="modal">
            <div className="close-bar">
                <span className="close" onClick={close}>
                    &times;
                </span>
            </div>
            <div className="content">
                <div className={styles.addUserBar}>
                    <input type="text" placeholder="Введите идентификатор 1С:"/>
                    <button className="btn btn-main" disabled={true}>Поиск</button>
                </div>
                {/*<div className={styles.foundUserBar}>*/}
                {/*    <UserCard/>*/}
                {/*    <button className="btn btn-main">Добавить</button>*/}
                {/*</div>*/}
                {/*<div className={styles.notFoundUserBar}>*/}
                {/*    <p>Сотрудник не найден</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

const UserCard = () => {
    return (
        <div className={styles.emplCard}>
            <div className={styles.photo}>
                <img src={userImg} alt=""/>
            </div>
            <div className={styles.labels}>
                <ul>
                    <li>Ф.И.О:</li>
                    <li>Должность:</li>
                    <li>Моб. тел.:</li>
                </ul>
            </div>
            <div className={styles.data}>
                <ul>
                    <li>Коробова Виктория Евгеньевна</li>
                    <li>Старший дизайнер</li>
                    <li>0555 505 292</li>
                </ul>
            </div>
        </div>
    )
}

const EmployeesList = () => {
    const employeesList = useSelector(state => state.staff.employeesList);

    return (
        employeesList.data.map((item) => {
            return (
                <div key={item.id} className={styles.emplCard}>
                    <div className={styles.photo}>
                        <img src={IMAGE_URL + item.image} alt=""/>
                    </div>
                    <div className={styles.labels}>
                        <ul>
                            <li>Ф.И.О:</li>
                            <li>Должность:</li>
                            <li>Моб. тел.:</li>
                        </ul>
                    </div>
                    <div className={styles.data}>
                        <ul>
                            <li>{item.full_name}</li>
                            <li>{item.position}</li>
                            <li>{item.phone_number}</li>
                        </ul>
                    </div>
                    <div className={styles.labels}>
                        <ul>
                            <li>Внутр. тел.:</li>
                            <li>Идентификатор 1С:</li>
                            <li>Эл. почта:</li>
                        </ul>
                    </div>
                    <div className={styles.data}>
                        <ul>
                            <li>{item.ip_phone ? item.ip_phone : 'нет'}</li>
                            <li>{item.id_1c ? item.id_1c : 'нет'}</li>
                            <li>{item.email}</li>
                        </ul>
                    </div>
                </div>
            )
        })
    )
}

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <div className={`${styles.fieldBlock} ${styles.fieldBlock1}`}>
                <fieldset>
                    <legend>Отдел</legend>
                    <select>
                        <option value="0">Выбрать</option>
                        <option value="0">ГД/Отдел разработок</option>
                    </select>
                </fieldset>
            </div>
            <div className={`${styles.fieldBlock} ${styles.fieldBlock2}`}>
                <fieldset>
                    <legend>Поиск</legend>
                    <div className={styles.iconInside}>
                        <input className={styles.input} type="text" placeholder="Имя, инициалы, должность"/>
                        <SearchIcon className={styles.icon}/>
                    </div>
                </fieldset>
            </div>
            <div className={styles.buttonBlock}>
                <Popup
                    trigger={<button className="btn btn-main mr-16">Добавить сотрудника</button>}
                    modal
                    nested
                >
                    {close => (<AddUserModal close={close}/>)}
                </Popup>
                <button className="btn btn-secondary">Выгрузить в excel</button>
            </div>
        </div>
    )
}

export const Employees = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployees());
    }, [])

    return (
        <div>
            <SearchBar/>
            <div className={`wrapper ${styles.tableBar}`}>
                <div className={styles.emplsList}>
                    <EmployeesList/>
                </div>
            </div>
        </div>
    )
};