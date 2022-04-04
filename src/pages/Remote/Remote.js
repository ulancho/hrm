import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import TableRemote from "./components/Table/TableRemote";

const Remote = () => {
    return (
        <>
            <SearchBar is_remote="1"/>
            <div className="wrapper">
                <TableRemote/>
            </div>
        </>
    )
};

export default Remote;