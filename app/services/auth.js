import { AsyncStorage } from "react-native";
import { API_URL, USER_KEY } from '../config';

export const onSignIn = (email, password) => {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}/login`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_email: email,
                user_password: password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            AsyncStorage.setItem(USER_KEY, responseJson.token);
            resolve(true);
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const onSignOut = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
        .then(token => {
            if (token === null) {
                reject('token not found');
                return;
            }
            const url = `${API_URL}/private/offliner?logout=1`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/jsonp;odata=verbose'
                }
            })
            .then((response) => response.json())
            .then(() => {
                AsyncStorage.removeItem(USER_KEY)
                resolve(true);
            })
            .catch((error) => {
                reject(error);
            });
        })
        .catch(err => reject(err));
    });
};

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
        .then(res => {
            if (res !== null) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
        .catch(err => reject(err));
    });
};
