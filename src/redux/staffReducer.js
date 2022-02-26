import {GET_EMPLOYEES} from "./types";

const initialState = {
    employeesList:[],
};

export const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return { ...state, employeesList:action.payload };
        default: return state;
    }
};