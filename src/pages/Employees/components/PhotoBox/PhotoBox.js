import React from "react";
import styles from "../EmployeesList/EmployeesList.module.css";
import {IMAGE_URL} from "../../../../constants";
import notImage from "../../../../media/images/not_image.png";
import {addDefaultSrc} from "../../../../helpers";
import {ReactComponent as CameraIcon} from "../../../../media/icons/camera.svg";
import classNames from "classnames";


const UpdateIcon = () => {
    return (
        <div className={classNames(styles.camera, styles.updatePhoto)}>
            <CameraIcon/>
        </div>
    )
}

const AddIcon = () => {
    return (
        <div className={classNames(styles.camera, styles.addPhoto)}>
            <CameraIcon/>
        </div>
    )
}

const PhotoBox = ({user}) => {
    return (
        <div className={styles.photo}>
            <img src={user.image ? IMAGE_URL + user.image : notImage}
                 alt={user.full_name ||= ''}
                 onError={addDefaultSrc}/>
            { user.image ? <UpdateIcon/> : <AddIcon/> }
        </div>
    )
}

export default PhotoBox;