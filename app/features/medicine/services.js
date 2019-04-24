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
  console.log("medicine fetch request");
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' ,
      'Authorization' : 'Bearer ' + access_token}
  };

  return fetch(API_CONFIG.MEDICINE, requestOptions)
    .then(handleResponse, handleError);
}
