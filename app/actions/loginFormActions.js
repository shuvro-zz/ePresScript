/**
 * @flow
 */
import { loginFormConstants } from '../constants';

export const loginFormActions = {
    setUserName,
    setPassword,
    setSubmitted
};

function setUserName(username: string) {
    return (dispatch: any) => {
        dispatch(go(username));
    };

    function go(username: string) {
        return {
            type: loginFormConstants.SET_USERNAME,
            username: username
        }
    }
}


function setPassword(password: string) {
    return (dispatch: any) => {
        dispatch(go(password));
    };

    function go(password: string) {
        return {
            type: loginFormConstants.SET_PASSWORD,
            password: password
        }
    }
}


function setSubmitted(value: boolean) {
    return (dispatch: any) => {
        dispatch(go(value));
    };

    function go(value: boolean) {
        return {
            type: loginFormConstants.SET_SUBMITTED,
            submitted: value
        }
    }
}


