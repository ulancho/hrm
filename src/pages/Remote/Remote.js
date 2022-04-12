import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import TableRemote from "./components/Table/TableRemote";

const Remote = () => {
    return (
        <div className="animate__animated animate__fadeIn animate__fast">
            <SearchBar is_remote="1"/>
            <div className="wrapper">
                <TableRemote/>
            </div>
        </div>
    )
};

export default Remote;