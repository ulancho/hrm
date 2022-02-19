import React from "react";
import styles from "./MainContent.module.css";

export const MainContent = ({children}) => {
    return (
        <div className={`container ${styles.mainContent}`}>
            {children}
        </div>
    )
};