import API_CONFIG from '../../store/config/config';
const log = require('electron-log');

export const services = {
  fetchProfile: fetchProfile
};

function fetchProfile(access_token) {
  console.log("profile fetch request");
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization' : 'Bearer ' + access_token}
  };

  return fetch(API_CONFIG.PROFILE, requestOptions)
    .then(handleResponse, handleError);
}

function handleResponse(response: any) {
  return new Promise((resolve: any, reject: any) => {
    if (response.ok) {
      console.log("Profile : " + response);
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

