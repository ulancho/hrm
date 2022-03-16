import {SET_MAIN_SCHEDULE} from "./types";

const initialState = {
    mainScheduleInput:[],
};

export const sheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_SCHEDULE:
            return { ...state, mainScheduleInput:[...action.payload] }
        default: return state;
    }
};