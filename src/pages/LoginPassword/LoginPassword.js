import React, {useState} from 'react';
import styles from './LoginPassword.module.css'
import classNames from 'classnames';
import {ReactComponent as Logo} from '../../media/icons/logo_white.svg';
import testUser from '../../media/images/test_user.jpg';


const LoginPassword = () => {
    const [view, setView] = useState(false);

    const clickPasswordView = () => {

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
                            type="password"
                            placeholder="Введите пароль"
                        />
                        <a
                            href="#"
                            className={classNames(styles.password_control, view ? styles.no_view : styles.view)}
                            onClick={clickPasswordView}
                        />
                    </div>
                    {/*<a href="#">Забыли пароль?</a>*/}
                </div>
            </div>
        </div>
    );
};

export default LoginPassword;