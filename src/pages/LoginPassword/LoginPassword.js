import React, {useState} from 'react';
import styles from './LoginPassword.module.css'
import classNames from 'classnames';
import {ReactComponent as Logo} from '../../media/icons/logo_white.svg';
import testUser from '../../media/images/test_user.jpg';


const LoginPassword = () => {
    const [view, setView] = useState(false);
    const [activeBtn, setActiveBtn] = useState('btn-not-active');


    const clickPasswordView = () => {
        setView(!view);
    }

    const changePassword = (event) => {
        if(event.target.value > 0){
            setActiveBtn('btn-main')
        } else{
            setActiveBtn('btn-not-active')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo}/>
                <div className={styles.myself}>
                    <img src={testUser} className={classNames(styles.user_img, 'mb-24')} alt="пользователь"/>
                    <p className={classNames(styles.title)}>Амелия Белова</p>
                    <p className={classNames(styles.title, 'mt-8')}>Оператор</p>
                    <p className={classNames(styles.title, 'mt-8')}>КЦ/зам.КД/КЦ</p>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="email">Пароль</label>
                    <div className={styles.password}>
                        <input
                            id="password"
                            type={view ? 'text' : 'password'}
                            placeholder="Введите пароль"
                            onChange={changePassword}
                        />
                        <a
                            href="#"
                            className={classNames(styles.password_control, view ? styles.no_view : styles.view)}
                            onClick={clickPasswordView}
                        />
                    </div>
                    <a href="#" className={styles.forgot_password}>Забыли пароль?</a>
                    <button className={classNames('btn mt-32', activeBtn)}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPassword;