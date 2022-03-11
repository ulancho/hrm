export const ContextMenu = ({event, show}) => {
console.log(show);
    if (show) {
        return (
            <ul className="menu" style={{ top: event.pageY, left: event.pageX }}>
                <li>Тест</li>
                <li>Тест</li>
                <li>Тест</li>
            </ul>
        );
    }
    return <></>;
};