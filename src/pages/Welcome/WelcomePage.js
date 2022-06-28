import React from "react";
import {Profile} from "../../components/profile/Profile";
import {SideBar} from "../../components/sideBar/SideBar";
import {MainContent} from "../../components/mainContent/MainContent";
import { ReactComponent as KgFlag } from "../../media/images/kg.svg"
import { ReactComponent as RuFlag } from "../../media/images/ru.svg"
import { ReactComponent as EngFlag } from "../../media/images/eng.svg"
import { ReactComponent as UzFlag } from "../../media/images/uz.svg"
import { ReactComponent as UserPhoto} from "../../media/images/userf.svg"
import styles from "../Welcome/Welcome.module.css";

const WelcomePage = () => {
    return (
        <>
            <Profile/>
            <div className="d-flex">
                <SideBar/>
                <MainContent>
                    <div className={`${styles.mainChart} animate__animated animate__fadeIn animate__fast`}>

                        <div className={styles.levels}>
                            <label class=" label1">
                                <input type="radio" class="radio" name="1"/>
                                <span className={styles.text}> Уровень 1 </span>
                            </label>
                            <label class="label2">
                                <input type="radio" class="radio" name="1"/>
                                <span className={styles.text}> Уровень 2 </span>
                            </label>


                            <ul className={styles.flag}>
                                <li className={styles.flag_list}><KgFlag/></li>
                                <li className={styles.flag_list1}><RuFlag/></li>
                                <li className={styles.flag_list2}><EngFlag/></li>
                                <li className={styles.flag_list3}><UzFlag/></li>
                            </ul>
                        </div>


                        <div>
                            <UserPhoto className={styles.UserPhoto}/>
                        </div>

                        <div className={styles.infolist1}>
                            <ul>
                                <li>Ф.И.О.:</li>
                                <li>Должность:</li>
                                <li>Моб. тел.:</li>
                                <li>Эл. почта:</li>
                                <li>ID в Протее</li>
                                <li>ID в 1C</li>
                            </ul>
                        </div>

                        <div className={styles.infolist2}>
                            <ul>
                                <li>Амелия Белова</li>
                                <li>Оператор</li>
                                <li>0555 505 292</li>
                                <li>michael.mitc@example.com</li>
                                <li>130</li>
                                <li>6515351</li>
                            </ul>
                        </div>

                        <div className={styles.infolist3}>
                            <ul>
                                <li>Уровень 1</li>
                                <li><KgFlag/> Кыргызский</li>
                                <li><RuFlag/> Русский</li>
                                <li><EngFlag/> Английский</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <UserPhoto className={styles.UserPhoto}/>
                    </div>

                    <div className={styles.infolist1}>
                        <ul>
                            <li>Ф.И.О.:</li>
                            <li>Должность:</li>
                            <li>Моб. тел.:</li>
                            <li>Эл. почта:</li>
                            <li>ID в Протее</li>
                            <li>ID в 1C</li>
                        </ul>
                    </div>

                    <div className={styles.infolist2}>
                        <ul>
                            <li>Амелия Белова</li>
                            <li>Оператор</li>
                            <li>0555 505 292</li>
                            <li>michael.mitc@example.com</li>
                            <li>130</li>
                            <li>6515351</li>
                        </ul>
                    </div>

                    <div className={styles.infolist3}>
                        <ul>
                            <li>Уровень 1</li>
                            <li><KgFlag/> Кыргызский</li>
                            <li><RuFlag/> Русский</li>
                            <li><EngFlag/> Английский</li>
                        </ul>
                    </div>
                </MainContent>
            </div>

        </>
    )
};

export default WelcomePage;











