import React from "react";
import styles from "./MainChart.module.css";

import SearchBar from "../../components/searchBar/SearchBar";
import HelpBar from "./components/HelpBar/HelpBar";
import TableBar from "./components/TableBar/TableBar";


export const MainChart = () => {
    return (
        <div className={`${styles.mainChart} animate__animated animate__fadeIn animate__fast`}>
            <SearchBar/>
            <div className="wrapper">
                <HelpBar/>
                <TableBar/>
            </div>
        </div>
    )
};