import DB from "../models";
const log = require('electron-log');
export const medicineService = {
  saveMedicine:saveMedicine
};

async function saveMedicine(value) {
  log.info("Save Medicine : " + value);
  const medicine = await DB.Medicine.create({form:value.form,name:value.name,strength:value.strength,frequency:value.frequency,remark:value.remark});
  log.info("Save Medicine : " + JSON.stringify(medicine));
  return medicine;
}
