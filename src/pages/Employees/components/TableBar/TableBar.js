import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../../../../store/actions/actions";
import {EMPLOYEES_PAGINATION} from "../../../../constants";
import ReactPaginate from "react-paginate";
import EmployeesList from "../EmployeesList/EmployeesList";

const TableBar = () => {
    const dispatch = useDispatch();
    const employeesList = useSelector(state => state.staff.employeesList);
    const queryParams = useSelector(state => state.staff.queryParams);
    const resetEmployeesPagination = useSelector(state => state.staff.resetEmployeesPagination);
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    /********************** обработчики для событий ********************/
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % employeesList.count;
        setItemOffset(newOffset);
        setPageNumber(event.selected);
    };

    /********************** хуки ********************/
    useEffect(() => {
        if (employeesList) {
            setPageCount(Math.ceil(employeesList.count / itemsPerPage));
        }
    }, [employeesList]);

    useEffect(() => {
        dispatch(getEmployees({offset: itemOffset, limit: EMPLOYEES_PAGINATION.limit}, queryParams));
    }, [itemOffset]);

    useEffect(() => {
        setPageNumber(0);
    }, [resetEmployeesPagination]);

    return (
        <>
            {employeesList.count > 0 ? <EmployeesList items={employeesList}/> :
                <h3 className="text-center">Данные не найдены</h3>}
            {
                employeesList.count ? <ReactPaginate
                    previousLabel="Назад"
                    nextLabel="Следующий"
                    pageCount={pageCount}
                    forcePage={pageNumber}
                    onPageChange={handlePageClick}
                    breakLabel="..."
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                /> : null
            }
        </>
    )
}

export default TableBar;