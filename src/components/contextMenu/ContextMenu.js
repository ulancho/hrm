import React, {useState} from "react";
import styles from "./ContextMenu.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SHIFT_STATUSES} from "../../constants";
import {SET_MAIN_SCHEDULE_INPUT, SET_MAIN_SCHEDULE_OUTPUT} from "../../redux/types";


export const ContextMenu = ({allData, employeeId, indexData, date, indexDate}) => {
    const dispatch = useDispatch();
    const mainSchedule = useSelector(state => state.sheet.mainScheduleInput);
    const [fieldHours, setFieldHours] = useState(false);
    const [active, setActive] = useState(0);
    const [hours, setHours] = useState('');

    /********************** доп. функции ********************/
    const setData = (type, hours=null) => {
        if(type !== 0){ //если статус: Командировочные, Больничные, Отпуск

            //для динамической отрисовки
            allData.days[indexDate] = {
                id: type,
                date: date,
                value: SHIFT_STATUSES[type].short_name
            };
        } else { //если статус: Отработано

            //для динамической отрисовки
            //TODO: жду пока ребята на беке не сделают часы, после исходя из этого сделаю объект
            console.log('Отработано');
        }

        collectData(type);
        mainSchedule[indexData] = allData;
        dispatch({ type:SET_MAIN_SCHEDULE_INPUT, payload:mainSchedule })
    }

    const collectData = (type) => {
        let userData = {
            employee_id:employeeId,
            status_id:type,
            date:date,
            hours:null
        }
        dispatch({ type:SET_MAIN_SCHEDULE_OUTPUT, payload:userData })
    }


    /********************** обработчики для событий ********************/
    const clickItemStatus = (event,type) => {
        setActive(type);
        if(type === 0){
            setFieldHours(true);
        } else {
            setData(type);
        }
    }

    const changeHoursField = (event) => {
        setData(0,event.target.value);
        setHours(event.target.value);
    }


    /********************** доп. компоненты ********************/
    const HoursField = () => {
        return <input className={styles.hoursFiled} onChange={changeHoursField} value={hours} autoFocus type="text" placeholder="Отработанные часы"/>
    }


    return (
        <div className="menu d-none">
            <ul>
                <li onClick={(event)=>clickItemStatus(event,0)} className={`${active === 0 ? 'active-status' : ''} s`}>{fieldHours ? <HoursField/>  : 'Отработано'}</li>
                <li onClick={(event)=>clickItemStatus(event,2)} className={`${active === 2 ? 'active-status' : ''} s`}>Командировочные</li>
                <li onClick={(event)=>clickItemStatus(event,1)} className={`${active === 1 ? 'active-status' : ''} s`}>Больничные</li>
                <li onClick={(event)=>clickItemStatus(event,3)} className={`${active === 3 ? 'active-status' : ''} s`}>Отпуск</li>
            </ul>
        </div>
    );
};