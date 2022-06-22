import React from "react";
import styles from "./MainContent.module.css";
import classNames from "classnames";

export const MainContent = ({children}) => {
    return (
        <div className={classNames(styles.mainContent, 'animate__animated animate__fadeIn animate__fast')}>
            {children}
        </div>
    )
};