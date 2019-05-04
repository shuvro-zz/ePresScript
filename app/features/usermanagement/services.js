import API_CONFIG from '../../store/config/config';

export const services = {
  fetchProfile: fetchProfile,
  updateProfile: updateProfile
};

function fetchProfile(access_token) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization' : 'Bearer ' + access_token}
  };

  return fetch(API_CONFIG.PROFILE, requestOptions)
    .then(handleResponse, handleError);
}
function updateProfile(access_token , profile) {
  console.log(profile);
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization' : 'Bearer ' + access_token},
    body: JSON.stringify(profile)
  };
console.log(requestOptions);

  return fetch(API_CONFIG.PROFILE, requestOptions)
    .then(handleResponse, handleError);
}
function handleResponse(response: any) {
  return new Promise((resolve: any, reject: any) => {
    console.log(response);
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

