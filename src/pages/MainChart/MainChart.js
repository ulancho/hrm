import React from "react";
import styles from "./MainChart.module.css";
import styleSearchBar from "./SearchBar.module.css";
import styleHelpBar from "./HelpBar.module.css";
import styleTableBarHeader from "./TableBarHeader.module.css";
import styleTableBarBody from "./TableBarBody.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../../redux/actions";

const SearchBar = () => {
    return (
        <div className={styleSearchBar.searchBar}>
            <div className={styleSearchBar.dateFieldBlock}>
                <fieldset>
                    <legend>Дата</legend>
                    <input type="month"/>
                </fieldset>
            </div>
            <div className={styleSearchBar.searchFieldBlock}>
                <fieldset>
                    <legend>Поиск</legend>
                    <input type="text" placeholder="Имя, инициалы, должность"/>
                </fieldset>
            </div>
            <div className={styleSearchBar.buttonBlock}>
                <button className="btn btn-main">Сохранить</button>
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

const TableBar = () => {
    return (
        <div className={styles.tableBar}>
            <TableBarHeader/>
            <TableBarBody/>
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

const TableBarBody = () => {
    const employeesList = useSelector(state => state.staff.employeesList);

    return (
        employeesList.map((item) => {
            return (
                <div className={styleTableBarBody.tableBarBody}>
                    <div className={styleTableBarBody.num}>
                        <span>1</span>
                    </div>
                    <div className={styleTableBarBody.name}>
                        <p>{item.full_name}</p>
                        <p>{item.position}</p>
                    </div>
                    <div className={`${styleTableBarBody.calendar}`}>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                    </div>
                    <div>
                        <div className={styleTableBarBody.square}><span>136</span></div>
                        <div className={styleTableBarBody.square}><span>136</span></div>
                    </div>
                    <div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                        <div className={styleTableBarBody.square}><span>8</span></div>
                    </div>
                    <div>
                        <div className={styleTableBarBody.square}><span>15</span></div>
                        <div className={styleTableBarBody.square}><span>15</span></div>
                    </div>
                    <div>
                        <div className={styleTableBarBody.square}><span>366</span></div>
                        <div className={styleTableBarBody.square}><span>366</span></div>
                    </div>
                    <div>
                        <div
                            className={`${styleTableBarBody.coefficient} ${styleHelpBar.helpsBlock} ${styleHelpBar.coefficient}`}><span
                            className={styleHelpBar.commonSign}>2.00</span></div>
                    </div>
                </div>

            )
        })
    )
}

export const MainChart = () => {
    const dispatch = useDispatch();
    dispatch(getEmployees());

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