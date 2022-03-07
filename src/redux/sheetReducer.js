import {GET_MAIN_SCHEDULE} from "./types";

const initialState = {
    mainSchedule:[],
};

export const sheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MAIN_SCHEDULE:
            return { ...state, mainSchedule:action.payload };
        default: return state;
    }
};