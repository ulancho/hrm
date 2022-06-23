import React from "react";
import classNames from "classnames";
import Popup from "reactjs-popup";
import styles from "./EmployeesList.module.css";
import {IMAGE_URL} from "../../../../constants";
import notImage from "../../../../media/images/not_image.png";
import {addDefaultSrc} from "../../../../helpers";
import {ReactComponent as CameraIcon} from "../../../../media/icons/camera.svg";
import UserPhotoModal from "../UserPhotoModal/UserPhotoModal";

const EmployeesList = ({items}) => {
    return (
        <>
            {
                items.data.map((item) => (
                    <div key={item.id}
                         className={classNames(styles.emplCard, 'animate__animated animate__zoomIn animate__fast')}>
                        <Popup
                            trigger={
                                <div className={styles.photo}>
                                    <img src={item.image ? IMAGE_URL + item.image : notImage}
                                         alt={item.full_name ||= ''}
                                         onError={addDefaultSrc}/>
                                    {
                                        item.image ? <div className={`${styles.camera} ${styles.updatePhoto}`}>
                                            <CameraIcon/>
                                        </div> : <div className={`${styles.camera} ${styles.addPhoto}`}>
                                            <CameraIcon/>
                                        </div>
                                    }
                                </div>
                            }
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
