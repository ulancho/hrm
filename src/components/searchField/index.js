import React from "react";
import styles from "./index.module.css";
import {ReactComponent as SearchIcon} from "../../media/icons/search.svg";
import classNames from "classnames";

const SearchField = ({onChange, onReset, iconActive}) => {
    return (
        <fieldset>
            <legend>Поиск</legend>
            <div className={styles.iconInside}>
                <form>
                    <SearchIcon className={classNames(styles.icon, styles[iconActive])}/>
                    <input
                        onChange={onChange}
                        className={styles.input}
                        type="text"
                        placeholder="Имя, инициалы, должность"/>
                    <button
                        type="reset"
                        className={styles.resetIcon}
                        onClick={onReset}
                    >&times;</button>
                </form>
            </div>
        </fieldset>
    )
}

export default SearchField;