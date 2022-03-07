import {GET_EMPLOYEES, HIDE_PRELOADER, SHOW_FAIL_API_MODAL, SHOW_PRELOADER} from "./types";

/************* получение сотрудников *************/
export function getEmployees() {
    return dispatch => {
        dispatch({ type:SHOW_PRELOADER });
        const options = {
            method: 'get',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBtZWdhY29tLmtnIiwiZXhwIjoxNjQ3MDg4MTMzfQ.2LgHzIch8kVElj5dSDM3c5vxUXn336vAtnyuv-7rJVc'
            }
        };
        fetch('http://10.242.147.11:8000/staff/employees/', options).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
            .then((responseJson) => {
                dispatch({ type:GET_EMPLOYEES, payload:responseJson })
                dispatch({ type:HIDE_PRELOADER })
            })
            .catch((error) => {
                dispatch({ type:HIDE_PRELOADER, payload:{preloader: 'hide', backdropModal: 'hide'} })
                dispatch({ type:SHOW_FAIL_API_MODAL,payload:{failApiTxt:error.message} })
            });
    }
}
