import React from "react";
import {Profile} from "../../components/profile/Profile";
import {SideBar} from "../../components/sideBar/SideBar";
import {MainContent} from "../../components/mainContent/MainContent";
import styles from "../MainChart/MainChart.module.css";
import {useSelector} from "react-redux";

const WelcomePage = () => {
    const userData = useSelector(state => state.login.user);
    console.log(userData);

    return (
        <>
            <Profile/>
            <div className="d-flex">
                <SideBar/>
                <MainContent>
                    <div className={`${styles.mainChart} animate__animated animate__fadeIn animate__fast`}>
                        <div className="wrapper">
                            <h1>Добро пожаловать</h1>
                        </div>
                    </div>
                </MainContent>
            </div>
        </>
    )
}

export default WelcomePage;