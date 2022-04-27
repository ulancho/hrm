import {SET_STAFF_RATE_DATA} from "./types";

const initialState = {
    data:{
        count:0,
        data:[]
    }
};

export const staffRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STAFF_RATE_DATA:
            return { ...state, data:action.payload }
        default: return state;
    }
};