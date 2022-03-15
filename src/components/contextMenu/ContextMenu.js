import {useState} from "react";
import styles from "./ContextMenu.module.css";


export const ContextMenu = () => {
    const [fieldHours, setFieldHours] = useState(false);
    const [active, setActive] = useState(0);

    const clickItemStatus = (event,type) => {
        setActive(type);
        if(type === 1){
            setFieldHours(true);
        }
    }

    const HoursField = () => {
        return <input className={styles.hoursFiled} type="text" placeholder="Отработанные часы"/>

    }

    return (
        <div className="menu d-none">
            <ul>
                <li onClick={(event)=>clickItemStatus(event,1)} className={`${active === 1 ? 'active-status' : ''} s`}>{fieldHours ? <HoursField/>  : 'Отработано'}</li>
                <li onClick={(event)=>clickItemStatus(event,2)} className={`${active === 2 ? 'active-status' : ''} s`}>Командировочные</li>
                <li onClick={(event)=>clickItemStatus(event,3)} className={`${active === 3 ? 'active-status' : ''} s`}>Больничные</li>
                <li onClick={(event)=>clickItemStatus(event,4)} className={`${active === 4 ? 'active-status' : ''} s`}>Опуск</li>
            </ul>
        </div>
    );
};