/**
 * @flow
 */

export type AddMedicineActionType = {
  type: string,
  form: string,
  name: string,
  strength: string,
  frequency: string,
  remark: string,
  submitted: boolean,
  error: string
};

