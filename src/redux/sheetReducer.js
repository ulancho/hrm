import {SET_MAIN_SCHEDULE_INPUT, SET_MAIN_SCHEDULE_OUTPUT} from "./types";

const initialState = {
    mainScheduleInput:{
        count:0,
        data:[]
    },
    mainScheduleOutput:[]
};

export const sheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_SCHEDULE_INPUT:
            return { ...state, mainScheduleInput:{...action.payload} }
        case SET_MAIN_SCHEDULE_OUTPUT:
            return { ...state, mainScheduleOutput:[...state.mainScheduleOutput, action.payload] }
        default: return state;
    }
};