import {SET_STAFF_RATE_DATA, SET_STAFF_RATE_DATA_OUTPUT} from "./types";

const initialState = {
    data:{
        count:0,
        data:[]
    },
    data_output:{}
};

export const staffRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STAFF_RATE_DATA:
            return { ...state, data:action.payload }
        case SET_STAFF_RATE_DATA_OUTPUT:
            return { ...state, data_output:{...state.data_output, ...action.payload} }
        default: return state;
    }
};