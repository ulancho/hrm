import {GET_EMPLOYEES, GET_MAIN_SCHEDULE, HIDE_PRELOADER, SHOW_FAIL_API_MODAL, SHOW_PRELOADER} from "./types";
import {BASE_URL} from "../constants";

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
        fetch(BASE_URL+ 'staff/employees/', options).then((response) => {
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


/************* получение таблицы основной график *************/
export function getMainSchedule() {
    return dispatch => {
        dispatch({ type:SHOW_PRELOADER });
        const options = {
            method: 'get',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBtZWdhY29tLmtnIiwiZXhwIjoxNjQ3MDg4MTMzfQ.2LgHzIch8kVElj5dSDM3c5vxUXn336vAtnyuv-7rJVc'
            }
        };
        fetch(BASE_URL+'schedule/sheet/?is_remote=0', options).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
            .then((responseJson) => {
                dispatch({ type:GET_MAIN_SCHEDULE, payload:responseJson })
                dispatch({ type:HIDE_PRELOADER })
            })
            .catch((error) => {
                dispatch({ type:HIDE_PRELOADER, payload:{preloader: 'hide', backdropModal: 'hide'} })
                dispatch({ type:SHOW_FAIL_API_MODAL,payload:{failApiTxt:error.message} })
            });
    }
}
