import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import styles from "./SearchBar.module.css";

import {getEmployees} from "../../../../store/actions/actions";
import {BASE_URL, EMPLOYEES_PAGINATION} from "../../../../constants";
import {RESET_EMPLOYEES_PAGINATION} from "../../../../store/actions/types";
import {saveFile} from "../../../../helpers";
import {ReactComponent as SearchIcon} from "../../../../media/icons/search.svg";
import styleSearchBar from "../../../MainChart/components/SearchBar/SearchBar.module.css";
import spinner from "../../../../media/gifs/1495.gif";
import AddUserModal from "../AddUserModal/AddUserModal";
import DepartmentsField from "../../../../components/departmentsField";
import SearchField from "../../../../components/searchField";

const SearchBar = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.login.user.pages);
    const page_settings = pages.find(item => item.name === 'employees');
    const [searchBtnActive, setSearchBtnActive] = useState(false);
    const [paramDepartments, setParamDepartments] = useState(0);
    const [paramSearch, setParamSearch] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [searchIconActive, setSearchIconActive] = useState('show');


    /********************** обработчики для событий ********************/
    const changeDepartments = (event) => {
        setParamDepartments(parseInt(event.currentTarget.value));
    }

    const changeSearch = (event) => {
        setParamSearch(event.currentTarget.value);
        if (event.currentTarget.value.length > 0) setSearchIconActive('hide');
        else setSearchIconActive('show');
    }

    const clickSearch = () => {
        const departments = paramDepartments ? ((paramDepartments === -1) ? '' : '&department_id=' + paramDepartments) : '';
        const search = paramSearch ? '&search=' + paramSearch : '';
        const queryParams = departments + search;
        dispatch(getEmployees({offset: EMPLOYEES_PAGINATION.offset, limit: EMPLOYEES_PAGINATION.limit}, queryParams));
        dispatch({type: RESET_EMPLOYEES_PAGINATION, payload: Date.now()});
    }

    const clickSaveToExcel = () => {
        const departments = paramDepartments ? 'department_id=' + paramDepartments : '';
        const search = paramSearch ? 'search=' + paramSearch : '';
        let queryParams = '';

        if (departments && search) {
            queryParams = departments + '&' + search;
        } else if (departments && !search) {
            queryParams = departments;
        } else if (search && !departments) {
            queryParams = search;
        }

        const url = BASE_URL + 'staff/employees/upload?' + queryParams;
        setIsPending(true);
        saveFile(url, 'xlsx')
            .then(() => setIsPending(false))
            .catch(status => {
                toast.error('Произошла ошибка. ' + status);
                setIsPending(false);
            })
    }

    const resetSearchField = () => {
        setParamSearch('');
        setSearchIconActive('show');
    }

    /********************** доп.компоненты ********************/
    const SearchButton = () => {
        if (searchBtnActive) {
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

    const AddButton = () => {
        if (page_settings && page_settings.operation_type === 'view') {
            return <button className="btn btn-main mr-16 btn-not-allowed">Добавить сотрудника</button>
        } else {
            return <Popup
                trigger={<button className="btn btn-main mr-16">Добавить сотрудника</button>}
                modal
                nested
            >
                {close => (<AddUserModal close={close}/>)}
            </Popup>
        }
    }

    const DownloadButton = () => {
        if (page_settings && page_settings.operation_type === 'view') {
            return <button className="btn btn-secondary btn-not-allowed">Выгрузить в excel</button>
        } else {
            return <button onClick={clickSaveToExcel} className="btn btn-secondary">
                {!isPending ? 'Выгрузить в excel' :
                    <img className={styles.spinner} src={spinner} alt="...загрузка"/>}
            </button>
        }
    }

    /********************** хуки ********************/
    useEffect(() => {
        if (paramDepartments || paramSearch) {
            setSearchBtnActive(true);
        } else {
            setSearchBtnActive(false);
        }
    }, [paramDepartments, paramSearch])

    return (
        <div className={styles.searchBar}>
            <div className={styles.fieldBlock1}>
                <DepartmentsField
                    onGetDepartment={changeDepartments}
                />
            </div>
            <div className={styles.fieldBlock2}>
                <SearchField
                    onChange={changeSearch}
                    onReset={resetSearchField}
                    iconActive={searchIconActive}
                />
            </div>
            <div className={styles.buttonBlock}>
                <SearchButton/>
                <AddButton/>
                <DownloadButton/>
            </div>
        </div>
    )
}

export default SearchBar;