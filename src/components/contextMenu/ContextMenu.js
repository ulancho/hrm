import {useEffect} from "react";

export const ContextMenu = () => {
    const handleClick = () => {
        let menu = document.querySelectorAll('.menu');
        let activeCell = document.querySelectorAll('.active-cell');
        for(let i = 0; i < menu.length; i++){
            menu[i].classList.add('d-none');
        }
        for(let i = 0; i < activeCell.length; i++){
            activeCell[i].classList.remove('active-cell');
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.addEventListener("click", handleClick);
        };
    });

    return (
        <div className="menu d-none">
            <ul>
                <li className="s active-status">Отработано</li>
                <li className="s">Командировочные</li>
                <li className="s">Больничные</li>
                <li className="s">Опуск</li>
            </ul>
        </div>
    );
};