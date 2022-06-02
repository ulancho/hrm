import {BASE_URL, TOKEN} from "../constants";

class AuthService {
    login(email, password) {
        const url = BASE_URL + 'access-token/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email,password})
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

    logout() {

    }
}

export default new AuthService();