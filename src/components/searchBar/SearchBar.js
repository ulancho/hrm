import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getDepartments, getMainSchedule, saveMainSchedule} from "../../redux/actions";
import {BASE_URL} from "../../constants";
import {saveFile} from "../../helpers";
import styleSearchBar from "./SearchBar.module.css";
import classNames from "classnames";
import SearchButton from "./components/SearchButton/SearchButton";

const SearchBar = () => {
    const dispatch = useDispatch();
    const mainScheduleOutput = useSelector(state => state.sheet.mainScheduleOutput);
    const mainSchedulePagination = useSelector(state => state.sheet.mainSchedulePagination);
    const departmentsList = useSelector(state => state.staff.departmentsList);
    const [searchBtnActive,setSearchBtnActive] = useState(false);
    const [paramMonth,setParamMonth] = useState('');
    const [paramSearch,setParamSearch] = useState('');
    const [paramDepartments,setParamDepartments] = useState(0);

    /********************** обработчики для событий ********************/
    const clickSearch = () => {
        const pagination = { offset: 0, limit: 10 };
        const month = paramMonth ? '&month_number=' +  paramMonth : '';
        const search = paramSearch ? '&search=' +  paramSearch : '';
        const departments = paramDepartments ? '&department_id=' +  paramDepartments : '';
        const queryParams = month + search + departments;
        dispatch(getMainSchedule(pagination,false, queryParams));
    }

    const clickSave = () => {
        dispatch(saveMainSchedule(mainScheduleOutput,mainSchedulePagination));
    }

    const clickSaveToExcel = () => {
        const url = BASE_URL + 'schedule/sheet/?is_remote=0&to_excel=true';
        saveFile(url, 'xlsx');
    }

    const changeMonth = (event) => {
        setParamMonth(event.currentTarget.value.slice(5,8));
    }

    const changeSearch = (event) => {
        setParamSearch(event.currentTarget.value);
    }

    const changeDepartments = (event) => {
        setParamDepartments(parseInt(event.currentTarget.value));
    }

    /********************** доп.компоненты ********************/
    const SaveButton = () => {
        if (mainScheduleOutput.length > 0) {
            return <button onClick={clickSave} className="btn btn-main">Сохранить</button>
        } else {
            return <button className="btn btn-main btn-not-allowed">Сохранить</button>
        }
    }

    /********************** хуки ********************/
    useEffect(() => {
        if (paramMonth || paramSearch || paramDepartments){
            setSearchBtnActive(true);
        } else {
            setSearchBtnActive(false);
        }
    }, [paramMonth,paramSearch,paramDepartments]);

    useEffect(()=>{
        dispatch(getDepartments())
    }, [])

    return (
        <div className={classNames(styleSearchBar.searchBar)}>
            <div className={classNames(styleSearchBar.dateFieldBlock)}>
                <fieldset>
                    <legend>Дата</legend>
                    <input onChange={changeMonth} type="month"/>
                </fieldset>
            </div>
            <div className={classNames(styleSearchBar.selectFieldBlock)}>
                <fieldset>
                    <legend>Отдел</legend>
                    <select onChange={changeDepartments}>
                        <option value="0">Выбрать</option>
                        { departmentsList.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>) }
                    </select>
                </fieldset>
            </div>
            <div className={classNames(styleSearchBar.searchFieldBlock)}>
                <fieldset>
                    <legend>Поиск</legend>
                    <input type="text" onChange={changeSearch} placeholder="ФИО, должность"/>
                </fieldset>
            </div>
            <div className={classNames(styleSearchBar.buttonBlock)}>
                <SearchButton active={searchBtnActive}/>
            </div>
            <div className={classNames(styleSearchBar.buttonBlock)}>
                <SaveButton/>
            </div>
            <div className={classNames(styleSearchBar.buttonBlock)}>
                <button className="btn btn-secondary" onClick={clickSaveToExcel}>Сохранить в excel</button>
            </div>
        </div>
    )
}

export default SearchBar;
