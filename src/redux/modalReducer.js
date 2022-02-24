import {
    SHOW_FAIL_API_MODAL,
    SHOW_INFO_MODAL,
    HIDE_INFO_MODAL,
    SHOW_ERROR_MODAL,
    HIDE_ERROR_MODAL,
    SHOW_PRELOADER, HIDE_PRELOADER,
} from "./types";

const initialState = {
    infoModal: 'fade',
    errorModal: 'fade',
    failApiModal: 'fade',
    backdropModal: 'fade',
    preloader: 'fade'
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FAIL_API_MODAL:
            return {...state, failApiModal: 'show', backdropModal: 'show'};
        case SHOW_INFO_MODAL:
            return {...state, infoModal: 'show', backdropModal: 'show'};
        case HIDE_INFO_MODAL:
            return {...state, infoModal: 'fade', backdropModal: 'fade'};
        case SHOW_ERROR_MODAL:
            return {...state, errorModal: 'show', backdropModal: 'show'};
        case HIDE_ERROR_MODAL:
            return {...state, errorModal: 'fade', backdropModal: 'fade'};
        case SHOW_PRELOADER:
            return {...state, preloader: 'show', backdropModal: 'show'};
        case HIDE_PRELOADER:
            return {...state, preloader: 'fade', backdropModal: 'fade'};

        default:
            return state;
    }
};