import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getMainSchedule, saveMainSchedule} from "../../../../store/actions/actions";
import {BASE_URL} from "../../../../constants";
import {saveFile} from "../../../../helpers";
import {ReactComponent as SearchIcon} from "../../../../media/icons/search.svg";
import styleSearchBar from "./SearchBar.module.css";
import SearchField from "../../../../components/searchField";
import DepartmentsField from "../../../../components/departmentsField";

const SearchBar = () => {
    const dispatch = useDispatch();
    const mainScheduleOutput = useSelector(state => state.sheet.mainScheduleOutput);
    const mainSchedulePagination = useSelector(state => state.sheet.mainSchedulePagination);
    const [searchBtnActive, setSearchBtnActive] = useState(false);
    const [paramMonth, setParamMonth] = useState('');
    const [paramSearch, setParamSearch] = useState('');
    const [paramDepartments, setParamDepartments] = useState(0);
    const [searchIconActive, setSearchIconActive] = useState('show');

    /********************** обработчики для событий ********************/
    const clickSearch = () => {
        const pagination = {offset: 0, limit: 10};
        const month = paramMonth ? '&month_number=' + paramMonth : '';
        const search = paramSearch ? '&search=' + paramSearch : '';
        const departments = paramDepartments ? '&department_id=' + paramDepartments : '';
        const queryParams = month + search + departments;
        dispatch(getMainSchedule(pagination, false, queryParams));
    }

    const clickSave = () => {
        dispatch(saveMainSchedule(mainScheduleOutput, mainSchedulePagination));
    }

    const clickSaveToExcel = () => {
        const url = BASE_URL + 'schedule/sheet/?is_remote=0&to_excel=true';
        saveFile(url, 'xlsx');
    }

    const changeMonth = (event) => {
        setParamMonth(event.currentTarget.value.slice(5, 8));
    }

    const changeSearch = (event) => {
        setParamSearch(event.currentTarget.value);
        if (event.currentTarget.value.length > 0) setSearchIconActive('hide');
        else setSearchIconActive('show');
    }

    const changeDepartments = (event) => {
        setParamDepartments(parseInt(event.currentTarget.value));
    }

    const resetSearchField = () => {
        setParamSearch('');
        setSearchIconActive('show');
    }


    /********************** доп.компоненты ********************/
    const SaveButton = () => {
        if (mainScheduleOutput.length > 0) {
            return <button onClick={clickSave} className="btn btn-main">Сохранить</button>
        } else {
            return <button className="btn btn-main btn-not-allowed">Сохранить</button>
        }
    }

    const SearchButton = () => {
        if (searchBtnActive) {
            return (
                <button onClick={clickSearch} className="btn btn-main">
                    <SearchIcon className={styleSearchBar.searchIcon}/>
                    Поиск
                </button>
            )
        } else {
            return (
                <button className="btn btn-main btn-not-allowed">
                    <SearchIcon className={styleSearchBar.searchIcon}/>
                    Поиск
                </button>
            )
        }
    }

    /********************** хуки ********************/
    useEffect(() => {
        if (paramMonth || paramSearch || paramDepartments) {
            setSearchBtnActive(true);
        } else {
            setSearchBtnActive(false);
        }
    }, [paramMonth, paramSearch, paramDepartments]);

    return (
        <div className={styleSearchBar.searchBar}>
            <div className={styleSearchBar.dateFieldBlock}>
                <fieldset>
                    <legend>Дата</legend>
                    <input className="date-field" onClick={changeMonth} type="month"/>
                </fieldset>
            </div>
            <div className={styleSearchBar.selectFieldBlock}>
                <DepartmentsField
                    onGetDepartment={changeDepartments}
                />
            </div>
            <div className={styleSearchBar.searchFieldBlock}>
                <SearchField
                    iconActive={searchIconActive}
                    onChange={changeSearch}
                    onReset={resetSearchField}
                />
            </div>
            <div className={styleSearchBar.buttonBlock}>
                <SearchButton/>
            </div>
            <div className={styleSearchBar.buttonBlock}>
                <SaveButton/>
            </div>
            <div className={styleSearchBar.buttonBlock}>
                <button className="btn btn-secondary" onClick={clickSaveToExcel}>Выгрузить в excel</button>
            </div>
        </div>
    )
}

export default SearchBar;