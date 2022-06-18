import React, {useState} from "react";
import styles from "./Profile.module.css";
import {ReactComponent as ProfileIcon} from "./../../media/icons/profile.svg";
import {ReactComponent as Logo} from "../../media/icons/logo.svg";
import {ReactComponent as Arrows} from "../../media/icons/arrow_bottom.svg";
import AuthService from "../../services/auth.service";
import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        setToggle(!toggle)
    }

    const logout = () => {
        AuthService.logout();
        navigate('/login');
    }

    return (
        <div className={`my-container ${styles.profileBar}`}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.profile}>
                <ProfileIcon/>
                <p className={styles.profileName} onClick={toggleMenu}> Имя руководителя
                    {
                        toggle ? <Arrows id="arrow" className={styles.arrow}/> :
                            <Arrows className={styles.arrow_reverse}/>
                    }
                </p>
                {
                    toggle ?
                        <div className={styles.dropdown}>
                            <ul className={styles.dropdown_menu}>
                                <li className={styles.dropdown_list}>Поделиться</li>
                                <li
                                    className={styles.dropdown_list}
                                    onClick={logout}
                                >Выход</li>
                            </ul>
                        </div> : null

                }
            </div>
        </div>
    )
};