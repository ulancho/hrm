import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMainSchedule} from "../../../../redux/actions";
import styles from "./TableRemote.module.css";
import ReactPaginate from "react-paginate";
import TableBodyRemote from "../TableBodyRemote/TableBodyRemote";
import TableHeaderRemote from "../TableHeaderRemote/TableHeaderRemote";

const TableRemote = () => {
    const dispatch = useDispatch();
    const employeesList = useSelector(state => state.sheet.mainScheduleInput);
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    /********************** обработчики для событий ********************/
    const clickCloseContextMenu = (event) => {
        if (event.target.classList.contains('s') || event.target.classList.contains('menu') || event.target.parentNode.classList.contains('s')) return;

        let menu = document.querySelectorAll('.menu');
        let activeCell = document.querySelectorAll('.active-cell');
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add('d-none');
        }
        for (let i = 0; i < activeCell.length; i++) {
            activeCell[i].classList.remove('active-cell');
        }
    }

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % employeesList.count;
        setItemOffset(newOffset);
    };

    /********************** хуки ********************/
    useEffect(() => {
        setPageCount(Math.ceil(employeesList.count / itemsPerPage));
    }, [employeesList]);

    useEffect(() => {
        dispatch(getMainSchedule({offset: itemOffset, limit: itemsPerPage}, false, "&is_remote=1"));
    }, [itemOffset]);

    useEffect(() => {
        document.addEventListener("click", clickCloseContextMenu);
        return () => {
            document.addEventListener("click", clickCloseContextMenu);
        };
    });

    return (
        <div className={styles.tableBar}>
            <TableHeaderRemote/>
            <TableBodyRemote items={employeesList}/>
            <ReactPaginate
                previousLabel="Назад"
                nextLabel="Следующий"
                breakLabel="..."
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
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
            />
        </div>
    )
};

export default TableRemote;