import React from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import HelpBar from "./components/HelpBar/HelpBar";
import TableBar from "./components/TableBar/TableBar";
import {Profile} from "../../components/profile/Profile";
import {SideBar} from "../../components/sideBar/SideBar";
import {MainContent} from "../../components/mainContent/MainContent";


export const MainChartPage = () => {
    return (
        <>
            <Profile/>
            <div className="d-flex">
                <SideBar/>
                <MainContent>
                    <SearchBar/>
                    <div className="wrapper">
                        <HelpBar/>
                        <TableBar/>
                    </div>
                </MainContent>
            </div>
        </>
    )
};