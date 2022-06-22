import React from "react";
import {Profile} from "../../components/profile/Profile";
import {SideBar} from "../../components/sideBar/SideBar";
import {MainContent} from "../../components/mainContent/MainContent";
import TableBar from "./components/TableBar/TableBar";
import SearchBar from "./components/SearchBar/SearchBar";


const EmployeesPage = () => {
    return (
        <>
            <Profile/>
            <div className="d-flex">
                <SideBar/>
                <MainContent>
                    <SearchBar/>
                    <div className="wrapper">
                        <TableBar/>
                    </div>
                </MainContent>
            </div>
        </>
    )
};

export default EmployeesPage;