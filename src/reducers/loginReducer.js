

const initialState = {
    user:{
        count:0,
        data:[]
    }
};

export const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return { ...state, isLoggedIn:true, user:action.payload };
        default: return state;
    }
};