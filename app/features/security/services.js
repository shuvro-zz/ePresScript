/**
 * @flow
 */

import DB from "../../models";
import API_CONFIG from '../../store/config/config'
const log = require('electron-log');

export const services = {
    login: realLoginExample,
    logout : fakelogout
};
log.info("In Security service");

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
  const data = {
    grant_type: 'password',
    username: username,
    password: password,
  };

  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' ,
        'Authorization' : 'Basic ' + btoa( API_CONFIG.CLIENT_ID + ':' + API_CONFIG.CLIENT_SECRET)},
        body: formBody
    };

    return fetch(API_CONFIG.LOGIN, requestOptions)
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
          console.log(response);
            response.text().then((text: string) => reject(text));
        }
    });
}

function handleError(error: any) {
    return Promise.reject(error && error.message);
}

