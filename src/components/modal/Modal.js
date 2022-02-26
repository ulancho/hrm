import React from 'react';
import {useSelector} from "react-redux";
import styles from './Modal.module.css';


/**************** фон для модалки *****************/
export const BackdropModal = () => {
    const state = useSelector(state => state.modal.backdropModal);

    return (
        <div className={`${styles.modalBackdrop} ${styles[state]}`}/>
    )
};