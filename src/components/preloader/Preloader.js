import React from 'react';
import {useSelector} from "react-redux";

export const Preloader = () => {
    const state = useSelector(state => state.modal.preloader);

    return (
        <div className={`loader ${state}`}>
            <div className="outer"/>
            <div className="middle"/>
            <div className="inner"/>
        </div>
    )
};