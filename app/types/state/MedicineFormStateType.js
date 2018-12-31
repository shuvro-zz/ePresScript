/**
 * @flow
 */

import type {MedicineType} from "../common/MedicineType";

export type MedicineFormStateType = {
  currentMedicineForm: string,
  currentMedicineName: string,
  currentMedicineStrength: string,
  currentMedicineFrequency: string,
  currentMedicineRemark: string,
  submitted: boolean,
  error: string,
  medicine: ?MedicineType
};
