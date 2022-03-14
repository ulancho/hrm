import {useEffect, useState} from "react";
import styles from "./ContextMenu.module.css";


export const ContextMenu = () => {
    const [field, setField] = useState(false);

    const clickCloseContextMenu = () => {
        let menu = document.querySelectorAll('.menu');
        let activeCell = document.querySelectorAll('.active-cell');
        for(let i = 0; i < menu.length; i++){
            menu[i].classList.add('d-none');
        }
        for(let i = 0; i < activeCell.length; i++){
            activeCell[i].classList.remove('active-cell');
        }
    }

    const clickItemStatus = (event,type) => {
        event.currentTarget.classList.add('active-status');
        setField(true);
    }

    const HoursField = () => {
        return <input className={styles.hoursFiled} type="text" placeholder="Отработанные часы"/>

    }


    // useEffect(() => {
    //     document.addEventListener("click", clickCloseContextMenu);
    //     return () => {
    //         document.addEventListener("click", clickCloseContextMenu);
    //     };
    // });

    return (
        <div className="menu d-none">
            <ul>
                <li onClick={(event)=>clickItemStatus(event,1)} className="s">{field ? <HoursField/>  : 'Отработано'}</li>
                <li onClick={(event)=>clickItemStatus(event,2)} className="s">Командировочные</li>
                <li onClick={(event)=>clickItemStatus(event,3)} className="s">Больничные</li>
                <li onClick={(event)=>clickItemStatus(event,4)} className="s">Опуск</li>
            </ul>
        </div>
    );
};