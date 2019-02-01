import {models} from "../models";

export const medicineService = {
  saveMedicine:saveMedicine
};

async function saveMedicine(value) {
  console.log("saving medicine");
  console.log(value);
  const medicine = await models.Medicine.create({form:value.form,name:value.name,strength:value.strength,frequency:value.frequency,remark:value.remark});
  console.log(medicine);
  return medicine;
}
