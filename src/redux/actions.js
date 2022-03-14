import {GET_EMPLOYEES, GET_MAIN_SCHEDULE, HIDE_PRELOADER, SHOW_FAIL_API_MODAL, SHOW_PRELOADER} from "./types";
import {BASE_URL, TOKEN} from "../constants";

/************* получение сотрудников *************/
export function getEmployees(options) {
    const params = '?limit='+ options.limit +'&offset=' + options.offset;
    return dispatch => {
        dispatch({ type:SHOW_PRELOADER });

        const options = {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            }
        };
        fetch(BASE_URL+ 'staff/employees/'+params, options).then((response) => {
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
                'Authorization': 'Bearer ' + TOKEN
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
