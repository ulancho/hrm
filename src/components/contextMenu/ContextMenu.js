import {useState} from "react";
import styles from "./ContextMenu.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SHIFT_STATUSES} from "../../constants";
import {SET_MAIN_SCHEDULE} from "../../redux/types";


export const ContextMenu = ({employeeId, indexDate, date, data, indexData}) => {
    const dispatch = useDispatch();
    const mainSchedule = useSelector(state => state.sheet.mainScheduleInput);
    const [fieldHours, setFieldHours] = useState(false);
    const [active, setActive] = useState(0);

    const setData = (type) => {
        data.days[indexDate] = {
            id: type,
            date: date,
            value: SHIFT_STATUSES[type].short_name
        };

        mainSchedule[indexData] = data;

        dispatch({ type:SET_MAIN_SCHEDULE, payload:mainSchedule })
    }

    const clickItemStatus = (event,type) => {
        setActive(type);
        if(type === 0){
            setFieldHours(true);
        } else {
            setData(type);
        }

    }

    const HoursField = () => {
        return <input className={styles.hoursFiled} type="text" placeholder="Отработанные часы"/>

    }

    return (
        <div className="menu d-none">
            <ul>
                <li onClick={(event)=>clickItemStatus(event,0)} className={`${active === 0 ? 'active-status' : ''} s`}>{fieldHours ? <HoursField/>  : 'Отработано'}</li>
                <li onClick={(event)=>clickItemStatus(event,2)} className={`${active === 2 ? 'active-status' : ''} s`}>Командировочные</li>
                <li onClick={(event)=>clickItemStatus(event,1)} className={`${active === 1 ? 'active-status' : ''} s`}>Больничные</li>
                <li onClick={(event)=>clickItemStatus(event,3)} className={`${active === 3 ? 'active-status' : ''} s`}>Опуск</li>
            </ul>
        </div>
    );
};