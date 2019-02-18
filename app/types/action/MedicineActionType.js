/**
 * @flow
 */

import type {MedicineType} from "../common/MedicineType";

export type MedicineActionType = {
  type: string,
  form: string,
  name: string,
  strength: string,
  frequency: string,
  remark: string,
  submitted: boolean,
  error: string,
  medicine: MedicineType
};

