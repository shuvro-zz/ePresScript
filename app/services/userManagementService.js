import API_CONFIG from '../store/config/config';
const log = require('electron-log');

export const userManagementService = {
  fetchProfile: fetchProfile
};

function fetchProfile() {
  console.log("profile fetch request");
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZGVza3RvcF9hcHBsaWNhdGlvbl92MSJdLCJ1c2VyX25hbWUiOiJ0ZXN0QHRlc3QuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU1NDQwMzc4OSwidHlwZSI6IkFETUlOIiwidXNlcmlkIjozLCJhdXRob3JpdGllcyI6WyJlX3ByZXNjcmlwdGlvbl9kZXNrdG9wIl0sImp0aSI6IjcxNjI2OTRiLTQ4YTQtNGQ5OS1hMjE0LTU4Nzc2OWYwNWEzZSIsImN1c3RvbWVybm8iOjQxNDg1NzM2LCJjbGllbnRfaWQiOiJkZXNrdG9wX2FwcGxpY2F0aW9uIn0.etlCyUP9txf5Vw5A0QjxX0UDYRgnBWtewBvTqN5L7cTMt_4Q3x8ySSh9fLSgyzEsPXQ78-zmr1U2t21L-ELedOZSqSCBfPA6N0nLaVrz3YtJgVCWtSjVzy_rcQjRo9Y9Jenf_88XKmFpMrSCX-zXWEnDH6hbBQuXO3G7MWUfBButsvne0VkE4yBi_Lj2hVJHABcJA8JHQLFZ3piBzJEGoGcpvMnyLkjvL1RFlT3ixL1bGXgVph3YG922Q_I_WHworndByuRVQ9g7Wrf25h62hk6FO7WKtk1jOn-plKRbtXaHTFOahJNAG4_efXKfzTNPLUdozOx6oUz0nRwy3u8sXA'}
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

