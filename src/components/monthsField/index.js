import React from "react";
import styles from "./monthsField.module.css";

const MonthField = ({onGetMonth}) => {
    return (
        <fieldset>
            <legend>Дата</legend>
            <input
                type="month"
                className={styles.dateField}
                onClick={onGetMonth}
                />
        </fieldset>
    )
}

export default MonthField;