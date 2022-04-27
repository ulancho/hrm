import React, {useEffect} from 'react';
import TableHeaderStaffRate from "../TableHeaderStaffRate/TableHeaderStaffRate";
import TableBodyStaffRate from "../TableBodyStaffRate/TableBodyStaffRate";
import {getStaffRate} from "../../../../redux/actions";
import {useDispatch} from "react-redux";

const TableStaffRate = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStaffRate({limit:10,offset:0}));
    }, []);

    return (
        <>
            <TableHeaderStaffRate/>
            <TableBodyStaffRate/>
        </>
    );
};

export default TableStaffRate;