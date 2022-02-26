import {
    SHOW_PRELOADER, HIDE_PRELOADER,
} from "./types";

const initialState = {
    backdropModal: 'fade',
    preloader: 'fade'
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PRELOADER:
            return {...state, preloader: 'show', backdropModal: 'show'};
        case HIDE_PRELOADER:
            return {...state, preloader: 'fade', backdropModal: 'fade'};
        default:
            return state;
    }
};