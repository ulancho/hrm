import React from "react";
import styles from "./Profile.module.css";
import {ReactComponent as ProfileIcon} from "./../../media/icons/profile.svg";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileIcon/>
            <p className={styles.profileName}>Имя руководителя</p>
        </div>
    )
};