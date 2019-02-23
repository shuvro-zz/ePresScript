/**
 * @flow
 */

import DB from "../models";
const log = require('electron-log');
export const authenticationService = {
    login: login,
    logout : fakelogout
};
log.info("In Authentication");

function fakelogout() {
  var p: Promise<any> =
    new Promise((resolve: any, x: any) => {
      setTimeout(() => {
        localStorage.removeItem('user');
        resolve(true);
      }, 1000);
    });

  return p;

}

async function login(username: string, password: string) {
  log.info("Login request using " + username +" "+ password);
    const user = await DB.User.findOne({
        where: {
            email: username,
            password: password
        }
    });
  log.info("Login request : User " + JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));

  return user;
}

function realLoginExample(username: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('www.mywebsite.com/login', requestOptions)
        .then(handleResponse, handleError)
        .then((user: any) => {
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function handleResponse(response: any) {
    return new Promise((resolve: any, reject: any) => {
        if (response.ok) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then((json: any) => resolve(json));
            } else {
                resolve();
            }
        } else {
            response.text().then((text: string) => reject(text));
        }
    });
}

function handleError(error: any) {
    return Promise.reject(error && error.message);
}

