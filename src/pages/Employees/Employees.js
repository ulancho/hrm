import React, {useEffect, useState} from "react";
import styles from "./Employees.module.css";
import {ReactComponent as SearchIcon} from "./../../media/icons/search.svg";
import userImg from "./user.png";
import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {getDepartments, getEmployees} from "../../redux/actions";
import {EMPLOYEES_PAGINATION, IMAGE_URL} from "../../constants";
import ReactPaginate from "react-paginate";
import styleSearchBar from "../MainChart/SearchBar.module.css";
import {RESET_EMPLOYEES_PAGINATION} from "../../redux/types";

const AddUserModal = ({close}) => {
    return (
        <div className="modal">
            <div className="close-bar">
                <span className="close" onClick={close}>
                    &times;
                </span>
            </div>
            <div className="content">
                <div className={styles.addUserBar}>
                    <input type="text" placeholder="Введите идентификатор 1С:"/>
                    <button className="btn btn-main" disabled={true}>Поиск</button>
                </div>
                {/*<div className={styles.foundUserBar}>*/}
                {/*    <UserCard/>*/}
                {/*    <button className="btn btn-main">Добавить</button>*/}
                {/*</div>*/}
                {/*<div className={styles.notFoundUserBar}>*/}
                {/*    <p>Сотрудник не найден</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

const UserCard = () => {
    return (
        <div className={styles.emplCard}>
            <div className={styles.photo}>
                <img src={userImg} alt=""/>
            </div>
            <div className={styles.labels}>
                <ul>
                    <li>Ф.И.О:</li>
                    <li>Должность:</li>
                    <li>Моб. тел.:</li>
                </ul>
            </div>
            <div className={styles.data}>
                <ul>
                    <li>Коробова Виктория Евгеньевна</li>
                    <li>Старший дизайнер</li>
                    <li>0555 505 292</li>
                </ul>
            </div>
        </div>
    )
}

const EmployeesList = ({items}) => {
    return (
        <>
            {items && items.data.map((item) => (
                <div key={item.id} className={styles.emplCard}>
                    <div className={styles.photo}>
                        <img src={IMAGE_URL + item.image} alt=""/>
                    </div>
                    <div className={styles.labels}>
                        <ul>
                            <li>Ф.И.О:</li>
                            <li>Должность:</li>
                            <li>Моб. тел.:</li>
                        </ul>
                    </div>
                    <div className={styles.data}>
                        <ul>
                            <li>{item.full_name}</li>
                            <li>{item.position}</li>
                            <li>{item.phone_number}</li>
                        </ul>
                    </div>
                    <div className={styles.labels}>
                        <ul>
                            <li>Внутр. тел.:</li>
                            <li>Идентификатор 1С:</li>
                            <li>Эл. почта:</li>
                        </ul>
                    </div>
                    <div className={styles.data}>
                        <ul>
                            <li>{item.ip_phone ? item.ip_phone : 'нет'}</li>
                            <li>{item.id_1c ? item.id_1c : 'нет'}</li>
                            <li>{item.email}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchBtnActive,setSearchBtnActive] = useState(false);
    const departmentsList = useSelector(state => state.staff.departmentsList);
    const [paramDepartments,setParamDepartments] = useState(0);
    const [paramSearch,setParamSearch] = useState('');

    /********************** обработчики для событий ********************/
    const changeDepartments = (event) => {
        setParamDepartments(parseInt(event.currentTarget.value));
    }

    const changeSearch = (event) => {
        setParamSearch(event.currentTarget.value);
    }

    const clickSearch = () => {
        const departments = paramDepartments ? '&department_id=' +  paramDepartments : '';
        const search = paramSearch ? '&search=' +  paramSearch : '';
        const queryParams = departments + search;
        dispatch(getEmployees({offset: EMPLOYEES_PAGINATION.offset, limit: EMPLOYEES_PAGINATION.limit}, queryParams));
        dispatch({type:RESET_EMPLOYEES_PAGINATION, payload:Date.now()});
    }

    /********************** доп.компоненты ********************/
    const SearchButton = () => {
        if(searchBtnActive){
            return (
                <button onClick={clickSearch} className="btn btn-main mr-16">
                    <SearchIcon className={styleSearchBar.searchIcon}/>
                    Поиск
                </button>
            )
        } else {
            return (
                <button className="btn btn-main btn-not-allowed mr-16">
                    <SearchIcon className={styleSearchBar.searchIcon}/>
                    Поиск
                </button>
            )
        }
    }

    /********************** хуки ********************/
    useEffect(()=>{
        dispatch(getDepartments())
    }, [])

    useEffect(() => {
        if (paramDepartments || paramSearch){
            setSearchBtnActive(true);
        } else {
            setSearchBtnActive(false);
        }
    }, [paramDepartments,paramSearch])

    return (
        <div className={styles.searchBar}>
            <div className={`${styles.fieldBlock} ${styles.fieldBlock1}`}>
                <fieldset>
                    <legend>Отдел</legend>
                    <select onChange={changeDepartments}>
                        <option value="0">Выбрать</option>
                        { departmentsList.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>) }
                    </select>
                </fieldset>
            </div>
            <div className={`${styles.fieldBlock} ${styles.fieldBlock2}`}>
                <fieldset>
                    <legend>Поиск</legend>
                    <div className={styles.iconInside}>
                        <input onChange={changeSearch}  className={styles.input} type="text" placeholder="Имя, инициалы, должность"/>
                        <SearchIcon className={styles.icon}/>
                    </div>
                </fieldset>
            </div>
            <div className={styles.buttonBlock}>
                <SearchButton/>
                <Popup
                    trigger={<button className="btn btn-main mr-16">Добавить сотрудника</button>}
                    modal
                    nested
                >
                    {close => (<AddUserModal close={close}/>)}
                </Popup>
                <button className="btn btn-secondary">Выгрузить в excel</button>
            </div>
        </div>
    )
}

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
        setPageCount(Math.ceil(employeesList.count / itemsPerPage));
    }, [employeesList]);

    useEffect(() => {
        dispatch(getEmployees({offset: itemOffset, limit: EMPLOYEES_PAGINATION.limit}, queryParams));
    }, [itemOffset]);

    useEffect(() => {
        setPageNumber(0);
    }, [resetEmployeesPagination]);



    return (
        <>
            <EmployeesList items={employeesList}/>
            <ReactPaginate
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
            />
        </>
    )
}

/********************** главный компонент ********************/
export const Employees = () => {
    return (
        <>
            <SearchBar/>
            <div className={`wrapper ${styles.tableBar}`}>
                <TableBar/>
            </div>
        </>
    )
};