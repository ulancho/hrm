import React from 'react';
import {useSelector} from "react-redux";


/**************** фон для модалки *****************/
export const BackdropModal = () => {
    const state = useSelector(state => state.modal.backdropModal);

    return (
        <div className={`modal-backdrop ${state}`}/>
    )
};