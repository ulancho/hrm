import {combineReducers} from "redux";
import {staffReducer} from "./staffReducer";
import {modalReducer} from "./modalReducer";
import {sheetReducer} from "./sheetReducer";

export const rootReducer = combineReducers({
    staff:staffReducer,
    modal:modalReducer,
    sheet:sheetReducer
});