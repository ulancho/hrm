import {combineReducers} from "redux";
import {staffReducer} from "./staffReducer";
import {modalReducer} from "./modalReducer";

export  const rootReducer = combineReducers({
    staff:staffReducer,
    modal:modalReducer,
});