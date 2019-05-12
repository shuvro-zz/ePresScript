import DB from "../../models";

export const services = {
  saveSettings: saveSettings,
  fetchSettings: fetchSettings
};

function saveSettings(value, access_token) {
  console.log("Save settings request", value);
  return DB.Settings.update({
    default_printer: value.defaultPrinter , background_print: value.backgroundPrint , access_token: access_token
  }, { where: { product_id: '270892' } }).then(handleResponse , handleError);

}
function fetchSettings() {
  console.log("fetchSettings");
  return DB.Settings.findOne({
    where: { product_id: '270892' }
  }).then(handleResponse , handleError);
}

function handleResponse(response: any) {
  return Promise.resolve(response);
}

function handleError(error: any) {
  return Promise.reject(error && error.message);
}
