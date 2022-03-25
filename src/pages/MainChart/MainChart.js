import React, {useEffect, useState} from "react";
import styles from "./MainChart.module.css";
import styleSearchBar from "./SearchBar.module.css";
import styleHelpBar from "./HelpBar.module.css";
import styleTableBarHeader from "./TableBarHeader.module.css";
import styleTableBarBody from "./TableBarBody.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getMainSchedule, saveMainSchedule} from "../../redux/actions";
import {getDay} from "../../helpers";
import {ContextMenu} from "../../components/contextMenu/ContextMenu";
import ReactPaginate from "react-paginate";

/********************** доп. компоненты ********************/
const SearchBar = () => {
    const dispatch = useDispatch();
    const mainScheduleOutput = useSelector(state => state.sheet.mainScheduleOutput);
    const mainSchedulePagination = useSelector(state => state.sheet.mainSchedulePagination);

    /********************** обработчики для событий ********************/
    const clickSave = () => {
        dispatch(saveMainSchedule(mainScheduleOutput,mainSchedulePagination));
    }

    const changeMonth = (event) => {
        const pagination = { offset: 0, limit: 10 };
        const params = 'month_number=' +  event.currentTarget.value.slice(5,8);
        dispatch(getMainSchedule(pagination,false, params));
    }

    /********************** доп.компоненты ********************/
    const SaveButton = () => {
        if (mainScheduleOutput.length > 0) {
            return <button onClick={clickSave} className="btn btn-main">Сохранить</button>
        } else {
            return <button className="btn btn-main btn-not-allowed">Сохранить</button>
        }
    }

    return (
        <div className={styleSearchBar.searchBar}>
            <div className={styleSearchBar.dateFieldBlock}>
                <fieldset>
                    <legend>Дата</legend>
                    <input onChange={changeMonth} type="month"/>
                </fieldset>
            </div>
            <div className={styleSearchBar.searchFieldBlock}>
                <fieldset>
                    <legend>Поиск</legend>
                    <input type="text" placeholder="Имя, инициалы, должность"/>
                </fieldset>
            </div>
            <div className={styleSearchBar.buttonBlock}>
                <SaveButton/>
            </div>
            <div className={styleSearchBar.buttonBlock}>
                <button className="btn btn-secondary">Сохранить в excel</button>
            </div>
        </div>
    )
}

const HelpBar = () => {
    return (
        <div className={styleHelpBar.helpBar}>
            <div className={styleHelpBar.helps}>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.workedOut} ${styles.mr8}`}><span
                    className={styleHelpBar.commonSign}>P</span></div>
                <span className={styleHelpBar.helpsTitle}>Отработано</span>
            </div>
            <div className={styleHelpBar.helps}>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.mission} ${styles.mr8}`}><span
                    className={styleHelpBar.commonSign}>К</span></div>
                <span className={styleHelpBar.helpsTitle}>Командировочные</span>
            </div>
            <div className={styleHelpBar.helps}>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.sickLeave} ${styles.mr8}`}><span
                    className={styleHelpBar.commonSign}>Б</span></div>
                <span className={styleHelpBar.helpsTitle}>Больничные</span>
            </div>
            <div className={styleHelpBar.helps}>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.furlough} ${styles.mr8}`}><span
                    className={styleHelpBar.commonSign}>О</span></div>
                <span className={styleHelpBar.helpsTitle}>Отпуск</span>
            </div>
            <div className={styleHelpBar.helps}>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.coefficient} ${styles.mr8}`}><span
                    className={styleHelpBar.commonSign}>К.Э</span></div>
                <span className={styleHelpBar.helpsTitle}>Коэффициент</span>
            </div>
        </div>
    )
}

const TableBarHeader = () => {
    return (
        <div className={styleTableBarHeader.TableBarHeader}>
            <div/>
            <div>
                <span className={styleTableBarHeader.title}>Фамилия, инициалы, должность</span>
            </div>
            <div>
                <span className={styleTableBarHeader.title}>Отметки о явках и неявках на работу по числам месяца</span>
            </div>
            <div>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.workedOut}`}><span
                    className={styleHelpBar.commonSign}>P</span></div>
            </div>
            <div>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.mission}`}><span
                    className={styleHelpBar.commonSign}>К</span></div>
            </div>
            <div>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.sickLeave}`}><span
                    className={styleHelpBar.commonSign}>Б</span></div>
            </div>
            <div>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.furlough}`}><span
                    className={styleHelpBar.commonSign}>О</span></div>
            </div>
            <div>
                <div className={`${styleHelpBar.helpsBlock} ${styleHelpBar.coefficient}`}><span
                    className={styleHelpBar.commonSign}>К.Э</span></div>
            </div>
        </div>
    )
}

const TableBarBody = ({items}) => {
    const freeDayClass = (value) => value === 'В' ? 'freeDay' : '';

    /********************** обработчики для событий ********************/
    const onClickRow = (event, type) => {
        if (event.target.classList.contains('s') || event.target.classList.contains('menu') || event.target.classList.contains('hours-field')) return;
        const currentRow = event.currentTarget.parentNode;
        if (type === 1) {
            currentRow.nextElementSibling.classList.remove('d-none');
            currentRow.classList.add('d-none');
        } else {
            currentRow.previousElementSibling.classList.remove('d-none');
            currentRow.classList.add('d-none');
        }
    }

    const onContextCell = (event) => {
        event.preventDefault();
        event.currentTarget.lastElementChild.classList.toggle('active-cell');
        event.currentTarget.querySelector('.menu').classList.toggle('d-none');
    }

    /********************** доп. компоненты ********************/
    const OverallCell = ({day=0, hour=0}) => {
        return (
            <div className={styleTableBarBody.allSum}>
                <div className={styleTableBarBody.square}><span>{day}</span></div>
                <div className={styleTableBarBody.square}><span>{hour}</span></div>
            </div>
        )
    }

    const RationCell = ({ratio=0}) => {
        return (
            <div>
                <div className={`${styleTableBarBody.coefficient} ${styleHelpBar.helpsBlock} ${styleHelpBar.coefficient}`}>
                    <span className={styleHelpBar.commonSign}>{ratio}</span>
                </div>
            </div>
        )
    }

    return (
        items.count > 0 ?
            items.data.map((item, index) => {
                return (
                    <React.Fragment key={item.employee_id}>
                        {/*До клика*/}
                        <div className={styleTableBarBody.tableBarBody}>
                            <div className={styleTableBarBody.num}>
                                <span>{index + 1}</span>
                            </div>
                            <div onClick={(e) => {onClickRow(e, 1)}} className={styleTableBarBody.name}>
                                <p>{item.full_name}</p>
                                <p>{item.position?.title}</p>
                            </div>
                            <div onClick={(e) => {onClickRow(e, 1)}} className={`${styleTableBarBody.calendar} ${styleTableBarBody.table1}`}>
                                {
                                    item.days.map((d, indexD) => {
                                        return (
                                            <div key={indexD}
                                                 className={`${styleTableBarBody.square} ${styleTableBarBody[freeDayClass(d.value)]}`}>
                                                <span>{d.value}</span></div>
                                        )
                                    })
                                }
                            </div>
                            {/*Отработано*/}
                            <OverallCell day={item.overall?.total_days} hour={item.overall?.total_hours}/>
                            {/*Командировачные*/}
                            <OverallCell day={item.overall?.secondment} hour={item.overall?.secondment_hours}/>
                            {/*Больничные*/}
                            <OverallCell day={item.overall?.sick} hour={item.overall?.sick_hours}/>
                            {/*Отпуск*/}
                            <OverallCell day={item.overall?.vacation} hour={item.overall?.vacation_hours}/>
                            {/*Коэффициент*/}
                            <RationCell ratio={item.overall?.ratio}/>
                        </div>
                        {/*После клика*/}
                        <div className={`${styleTableBarBody.tableBarBody} ${styleTableBarBody.table2} ${styleTableBarBody.tableBarBody2} d-none`}>
                            <div className={styleTableBarBody.num}>
                                <span>{index + 1}</span>
                            </div>
                            <div onClick={(e) => {onClickRow(e, 2)}} className={styleTableBarBody.name}>
                                <p>{item.full_name}</p>
                                <p>{item.position?.title}</p>
                            </div>
                            <div onClick={(e) => {onClickRow(e, 2)}} className={`${styleTableBarBody.calendar}`}>
                                {
                                    item.days.map((d, indexD) => {
                                        return (
                                            <div key={indexD} onContextMenu={onContextCell}
                                                 className={`d ${styleTableBarBody.square} ${styleTableBarBody[freeDayClass(d.value)]}`}>
                                                <span className="d">{getDay(d.date)}</span>
                                                <ContextMenu allData={item} indexData={index}
                                                             employeeId={item.employee_id} indexDate={indexD}
                                                             date={d.date}/>
                                                <div/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/*Отработано*/}
                            <OverallCell day={item.overall?.total_days} hour={item.overall?.total_hours}/>
                            {/*Командировачные*/}
                            <OverallCell day={item.overall?.secondment} hour={item.overall?.secondment_hours}/>
                            {/*Больничные*/}
                            <OverallCell day={item.overall?.sick} hour={item.overall?.sick_hours}/>
                            {/*Отпуск*/}
                            <OverallCell day={item.overall?.vacation} hour={item.overall?.vacation_hours}/>
                            {/*Коэффициент*/}
                            <RationCell ratio={item.overall?.ratio}/>
                        </div>
                    </React.Fragment>
                )
            }) : null
    )
}

const TableBar = () => {
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
        dispatch(getMainSchedule({offset: itemOffset, limit: itemsPerPage}));
    }, [itemOffset]);

    useEffect(() => {
        document.addEventListener("click", clickCloseContextMenu);
        return () => {
            document.addEventListener("click", clickCloseContextMenu);
        };
    });

    return (
        <div className={styles.tableBar}>
            <TableBarHeader/>
            <TableBarBody items={employeesList}/>
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
}

/********************** главный компонент ********************/
export const MainChart = () => {
    return (
        <div className={`${styles.mainChart}`}>
            <SearchBar/>
            <div className="wrapper">
                <HelpBar/>
                <TableBar/>
            </div>
        </div>
    )
};