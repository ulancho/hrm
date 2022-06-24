import React from "react";
import classNames from "classnames";
import Popup from "reactjs-popup";
import styles from "./EmployeesList.module.css";
import UserPhotoModal from "../UserPhotoModal/UserPhotoModal";
import PhotoBox from "../PhotoBox/PhotoBox";

const EmployeesList = ({items}) => {
    return (
        <>
            {
                items.data.map((item) => (
                    <div key={item.id}
                         className={classNames(styles.emplCard, 'animate__animated animate__zoomIn animate__fast')}>
                        <Popup
                            trigger={<PhotoBox user={item}/>}
                            modal
                            nested
                            position="right right"
                        >
                            {close => (<UserPhotoModal close={close}/>)}
                        </Popup>
                        <div className={classNames(styles.labels, styles.label1)}>
                            <ul>
                                <li>Ф.И.О:</li>
                                <li>Должность:</li>
                                <li>Моб. тел.:</li>
                            </ul>
                        </div>
                        <div className={styles.data}>
                            <ul>
                                <li>{item.full_name ||= <br/>}</li>
                                <li>{item.position ||= <br/>}</li>
                                <li>{item.phone_number ||= <br/>}</li>
                            </ul>
                        </div>
                        <div className={classNames(styles.labels, styles.label2)}>
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
                                <li>{item.email ||= <br/>}</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default EmployeesList;
