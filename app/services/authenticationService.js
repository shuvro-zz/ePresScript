/**
 * @flow
 */

import type {UserType} from "../types/common/UserType";
import {models} from "../models";
import {database} from "../services/database";

export const authenticationService = {
    login: login,
    logout : fakelogout
};

  function fakeLogin(username: string, password: string) {
    console.log("inside fakeLogin()");
    /**  Check if the user exists in the local database  */
    let test = database.check(username , password); //send the credentials to database to query

    test.then(function (fromResolve) {
      console.log(fromResolve);
      /**
       * save the user in the local storage or db ?
       * create token ?
       * return success
       * */
    }).catch(function (fromReject) {
      console.log(fromReject);
      /** return failed **/
    });
    /**  -------------------------------------------  */

    var p: Promise<any> =
     new Promise((resolve: any, x: any) => {
        setTimeout(() => {
          const user: UserType = { user: username, token: "fake token"};
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        }, 1000);
      });

      return p;
}

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
    
    const user = await models.User.findOne({
        where: {
            email: username,
            password: password
        }
    });

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
    } else {
      console.log('not init');  
    }

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
