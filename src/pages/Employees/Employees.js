import React from "react";
import styles from "./Employees.module.css";
import {ReactComponent as SearchIcon} from "./../../media/icons/search.svg";
import userImg from "./user.png";
import Popup from "reactjs-popup";

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

export const Employees = () => {
    return (
        <div className={styles.employess}>
            <div className={styles.searchBar}>
                <div className={styles.fieldBlock}>
                    <fieldset>
                        <legend>Отдел</legend>
                        <select>
                            <option value="0">Выбрать</option>
                            <option value="0">ГД/Отдел разработок</option>
                        </select>
                    </fieldset>
                </div>
                <div className={styles.fieldBlock}>
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
                        trigger={<button className="btn btn-main">Добавить сотрудника</button>}
                        modal
                        nested
                    >
                        {close => (<AddUserModal close={close}/>)}
                    </Popup>
                </div>
            </div>
            <div className={styles.tableBar}>
                <div className={styles.emplsList}>
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
                        <div className={styles.labels}>
                            <ul>
                                <li>Внутр. тел.:</li>
                                <li>Идентификатор 1С:</li>
                                <li>Эл. почта:</li>
                            </ul>
                        </div>
                        <div className={styles.data}>
                            <ul>
                                <li>нет</li>
                                <li>27391019</li>
                                <li>vkorobova@megacom.kg</li>
                            </ul>
                        </div>
                    </div>
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
                        <div className={styles.labels}>
                            <ul>
                                <li>Внутр. тел.:</li>
                                <li>Идентификатор 1С:</li>
                                <li>Эл. почта:</li>
                            </ul>
                        </div>
                        <div className={styles.data}>
                            <ul>
                                <li>нет</li>
                                <li>27391019</li>
                                <li>vkorobova@megacom.kg</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};