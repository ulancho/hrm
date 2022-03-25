import {
    GET_EMPLOYEES,
    HIDE_PRELOADER,
    SET_MAIN_SCHEDULE_INPUT, SET_MAIN_SCHEDULE_PAGINATION,
    SHOW_FAIL_API_MODAL,
    SHOW_PRELOADER
} from "./types";
import {BASE_URL, TOKEN} from "../constants";
import toast from 'react-hot-toast';

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
export function getMainSchedule(pagination,inner=false,options) {
    const params = '?is_remote=0&limit='+ pagination.limit +'&offset=' + pagination.offset + '&' + options;
    return dispatch => {
        dispatch({type:SET_MAIN_SCHEDULE_PAGINATION, payload:pagination})
        if(!inner) dispatch({ type:SHOW_PRELOADER });
        const opt = {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            }
        };
        fetch(BASE_URL+'schedule/sheet/' + params, opt).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if(response.status === 404){
                toast.error('Данные по вашему запросу не найдены',{position: 'top-right'});
            } else {
                throw new Error(response.status);
            }
        })
            .then((responseJson) => {
                if (responseJson) dispatch({ type:SET_MAIN_SCHEDULE_INPUT, payload:responseJson })
                dispatch({ type:HIDE_PRELOADER })
            })
            .catch((error) => {
                dispatch({ type:HIDE_PRELOADER, payload:{preloader: 'hide', backdropModal: 'hide'} })
                dispatch({ type:SHOW_FAIL_API_MODAL,payload:{failApiTxt:error.message} })
            });
    }
}

/************* сохранение таблицы основной график *************/
export function saveMainSchedule(data,pagination) {
    return dispatch => {
        dispatch({ type:SHOW_PRELOADER });
        const options = {
            method: 'post',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TOKEN
            }
        };
        fetch(BASE_URL+'schedule/shift-data/batch-create/', options).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
            .then((responseJson) => {
                toast.success('Данные успешно сохранены',{ position: 'top-right',});
                dispatch(getMainSchedule(pagination,true));
            })
            .catch((error) => {
                dispatch({ type:HIDE_PRELOADER, payload:{preloader: 'hide', backdropModal: 'hide'} })
                dispatch({ type:SHOW_FAIL_API_MODAL,payload:{failApiTxt:error.message} })
            });
    }
}


