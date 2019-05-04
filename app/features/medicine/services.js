import DB from "../../models";
import API_CONFIG from "../../store/config/config";

const log = require('electron-log');

export const services = {
  saveMedicine: saveMedicine,
  fetchMedicine: fetchMedicine
};

async function saveMedicine(value) {
  log.info("Save Medicine : " + value);
  const medicine = await DB.Medicine.create({form:value.form,name:value.name,strength:value.strength,frequency:value.frequency,remark:value.remark});
  log.info("Save Medicine : " + JSON.stringify(medicine));
  return medicine;
}

function fetchMedicine(access_token) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization' : 'Bearer ' + access_token}
  };

  return fetch(API_CONFIG.MEDICINE, requestOptions)
    .then(handleResponse, handleError);
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
