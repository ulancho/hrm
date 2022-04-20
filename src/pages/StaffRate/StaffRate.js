import React from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import TableStaffRate from "./components/TableStaffRate/TableStaffRate";

const StaffRate = () => {
    return (
        <div className="animate__animated animate__fadeIn animate__fast">
            <SearchBar is_remote="1"/>
            <div className="wrapper">
                <TableStaffRate/>
            </div>
        </div>
    );
};

export default StaffRate;