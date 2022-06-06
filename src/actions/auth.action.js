import AuthService from "../services/auth.service";
import {LOGIN_SUCCESS} from "./types";

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            console.log(data);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            // return Promise.resolve();
        },
        (error) => {
            console.log({error})
            // const message =
            //     (error.response &&
            //         error.response.data &&
            //         error.response.data.message) ||
            //     error.message ||
            //     error.toString();
            //
            // dispatch({
            //     type: LOGIN_FAIL,
            // });
            //
            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: message,
            // });
            //
            // return Promise.reject();
        }
    );
};