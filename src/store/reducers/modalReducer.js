import {
    SHOW_PRELOADER, HIDE_PRELOADER, SHOW_FAIL_API_MODAL, SHOW_FAIL_PERMISSION,
} from "../actions/types";

const initialState = {
    backdropModal: 'fade',
    preloader: 'fade',
    failApiModal: 'fade',
    failApiTxt:'',
    failPermissionModal: 'fade',
    failPermissionTxt:'',
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PRELOADER:
            return {...state, preloader: 'show', backdropModal: 'show'};
        case HIDE_PRELOADER:
            return {...state, preloader: 'fade', backdropModal: 'fade'};
        case SHOW_FAIL_API_MODAL:
            return {...state, failApiModal: 'show', backdropModal: 'show', failApiTxt:action.payload.failApiTxt};
        case SHOW_FAIL_PERMISSION:
            return {...state, failPermissionModal: 'show', backdropModal: 'show', failPermissionTxt:action.payload.txt};
        default:
            return state;
    }
};