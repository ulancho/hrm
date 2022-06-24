import React, {useState} from "react";
import styles from "./Profile.module.css";
import {ReactComponent as ProfileIcon} from "./../../media/icons/profile.svg";
import {ReactComponent as Logo} from "../../media/icons/logo.svg";
import {ReactComponent as Arrows} from "../../media/icons/arrow_bottom.svg";
import {ReactComponent as ClosePopup} from "../../media/icons/close-popup.svg";
import {ReactComponent as LinkPopup} from "../../media/icons/link.svg";
import {ReactComponent as CheckMark} from "../../media/icons/check_mark.svg";
import AuthService from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import Popup from 'reactjs-popup';


export const Profile = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState({auth:false, popup:false, dropdown1:false, dropdown2:false,dropdown3:false})
    const [email, setEmail] = useState({value:'', validate: true});
    const [roles, setRoles] = useState('Чтение');
    const [disableBtn, setDisableBtn] = useState(true);


    const handleChange = (e) =>{
        setEmail(e.currentTarget.value);
        setDisableBtn(!e.currentTarget.value);
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
                <p className={styles.profileName} onClick={()=>setToggle({...toggle,auth: !toggle.auth})}> Имя руководителя
                    {
                        toggle.auth ? <Arrows id="arrow" className={styles.arrow}/> :
                            <Arrows className={styles.arrow_reverse}/>
                    }
                </p>
                {
                    toggle.auth ?
                        <div className={styles.dropdown}>
                            <ul className={styles.dropdown_menu}>

                                <Popup
                                    trigger={<li className={styles.dropdown_list}>Поделиться</li>}
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal">
                                            <div className="close-bar">

                                                <ClosePopup onClick={close}/>
                                            </div>

                                            <h2 className={styles.modal_title}>Поделиться</h2>
                                            <div className={styles.modal_header}>
                                                <div className={styles.input_box}>
                                                    <input placeholder="Email, имя" onChange={handleChange}/>
                                                    <div className={styles.modal_dropdown} onClick={() => setToggle({...toggle,popup: !toggle.popup})}>{roles}
                                                        {
                                                            toggle.popup ? <Arrows className={styles.arrow} />
                                                            : <Arrows className={styles.arrow_reverse} />
                                                        }
                                                        {
                                                            toggle.popup ?
                                                                <div className={styles.modal_dropdown_menu}>
                                                                    <span onClick={() => setRoles('Редактировать')}>
                                                                        {
                                                                            roles === 'Редактировать' ? <CheckMark className={styles.checkmark}/> : null
                                                                        }
                                                                        Редактировать
                                                                    </span>
                                                                    <span onClick={() => setRoles('Чтение')}>
                                                                        {
                                                                            roles === 'Чтение' ? <CheckMark className={styles.checkmark}/> : null
                                                                        }
                                                                        Чтение
                                                                    </span><span onClick={() => setRoles('Владелец')}>
                                                                        {
                                                                            roles === 'Владелец' ? <CheckMark className={styles.checkmark}/> : null
                                                                        }
                                                                    Владелец
                                                                    </span><span onClick={() => setRoles('Удалить')}>
                                                                        {
                                                                            roles === 'Удалить' ? <CheckMark className={styles.checkmark}/> : null
                                                                        }
                                                                    Удалить
                                                                    </span>
                                                                </div>
                                                                : null
                                                        }

                                                    </div>
                                                </div>
                                                <button onClick={()=>console.log('works')} className="btn btn-main" disabled={disableBtn}>Отправить приглашение</button>
                                            </div>

                                            <h3 className={styles.modal_subtitle}>Сотрудники</h3>
                                            <div className={styles.modal_staff}>
                                                <div className="d-flex align-items-center">
                                                    <div className={styles.staff_img}>
                                                        <img/>
                                                    </div>
                                                    <div>
                                                        <h2 className={styles.modal_staffname}>Абасова Айгерим Толоновна</h2>
                                                        <span className={styles.modal_staffemail}> michael.mitc@example.com</span>
                                                    </div>
                                                </div>
                                                <div className={styles.modal_dropdown} onClick={() => setToggle({...toggle,dropdown1: !toggle.dropdown1})}>Владелец
                                                    {
                                                        toggle.dropdown1 ? <Arrows className={styles.arrow} />
                                                            : <Arrows className={styles.arrow_reverse} />
                                                    }
                                                    {
                                                        toggle.dropdown1 ?
                                                            <div className={styles.modal_dropdown_menu}>
                                                                <span><CheckMark className={styles.checkmark}/>Редактировать</span>
                                                                <span>Владелец</span>
                                                                <span>Чтение</span>
                                                                <span>Удалить</span>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                            </div>

                                            <div className={styles.modal_staff}>
                                                <div className="d-flex align-items-center">
                                                    <div className={styles.staff_img}>
                                                        <img/>
                                                    </div>
                                                    <div>
                                                        <h2 className={styles.modal_staffname}>Максим Попов</h2>
                                                        <span className={styles.modal_staffemail}> michael.mitc@example.com</span>
                                                    </div>
                                                </div>
                                                <div className={styles.modal_dropdown} onClick={() => setToggle({...toggle,dropdown2: !toggle.dropdown2})}>Чтение
                                                    {
                                                        toggle.dropdown2 ? <Arrows className={styles.arrow} />
                                                            : <Arrows className={styles.arrow_reverse} />
                                                    }
                                                    {
                                                        toggle.dropdown2 ?
                                                            <div className={styles.modal_dropdown_menu}>
                                                                <span>Чтение</span>
                                                                <span>Редактировать</span>
                                                                <span>Владелец</span>
                                                                <span>Удалить</span>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                            </div>

                                            <div className={styles.modal_staff}>
                                                <div className="d-flex align-items-center">
                                                    <div className={styles.staff_img}>
                                                        <img/>
                                                    </div>
                                                    <div>
                                                        <h2 className={styles.modal_staffname}>София  Иванова</h2>
                                                        <span className={styles.modal_staffemail}> michael.mitc@example.com</span>
                                                    </div>
                                                </div>
                                                <div className={styles.modal_dropdown} onClick={() => setToggle({...toggle,dropdown3: !toggle.dropdown3})}>Редактировать
                                                    {
                                                        toggle.dropdown3 ? <Arrows className={styles.arrow} />
                                                            : <Arrows className={styles.arrow_reverse} />
                                                    }
                                                    {
                                                        toggle.dropdown3 ?
                                                            <div className={styles.modal_dropdown_menu}>
                                                                <span>Редактировать</span>
                                                                <span>Чтение</span>
                                                                <span>Владелец</span>
                                                                <span>Удалить</span>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                            </div>


                                            <div className={styles.modal_link}>
                                                <LinkPopup/> <a  href="#">Копировать ссылку</a>
                                            </div>

                                        </div>
                                    )}
                                </Popup>
                                <li
                                    className={styles.dropdown_list}
                                    onClick={logout}>Выход</li>
                            </ul>
                        </div> : null

                }
            </div>
        </div>
    )
};