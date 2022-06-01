import {BASE_URL, TOKEN} from "./constants";


/*************************** проверка аккаунта  ***************************/
export function _checkAccount(email) {
    const url = BASE_URL + 'staff/employees/login-search/?email=' + email;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        }
    };

    return fetch(url,options).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw response.status;
        }
    })
        .then((responseJson) => {
            return { status:200, responseJson };
        })
        .catch((errorStatus) => {
            return { status:errorStatus };
        });
}