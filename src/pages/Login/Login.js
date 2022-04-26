import React, {useState} from 'react';
import styles from './Login.module.css';
import {ReactComponent as Logo} from "../../media/icons/logo_white.svg";
import classNames from "classnames";
import spinner from "../../media/gifs/1495.gif";

const Login = () => {
    const [activeBtn, setActiveBtn] = useState('btn-not-active');
    const [isPending, setIsPending] = useState(false)

    //проверка на наличие в конце @megacom.kg
    const checkEmail = (email) => {
        const regex = /@megacom\.kg$/i;
        return regex.test(email);
    }

    const changeEmail = (e) => {
        if(checkEmail(e.target.value)){
            setActiveBtn('btn-main');
        }
    }

    const clickOnwards = () => {
        setIsPending(true);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo}/>
                <div className={styles.input_container}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Введите Email"
                        onChange={changeEmail}/>
                    <button
                        className={classNames('btn mt-32',activeBtn)}
                        onClick={clickOnwards}>
                        {!isPending ? 'Далее' : <img className={styles.spinner} src={spinner} alt="...загрузка"/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;