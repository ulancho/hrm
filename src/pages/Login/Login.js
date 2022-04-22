import React from 'react';
import styles from './Login.module.css';
import {ReactComponent as Logo} from "../../media/icons/logo_white.svg";

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo}/>
                <div className={styles.input_container}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Введите Email"/>
                    <button className="btn btn-not-active mt-32">Далее</button>
                </div>
            </div>
        </div>
    );
};

export default Login;