/**
 * @flow
 */
import type {UserType} from "../common/UserType";

export type AddMedicineActionType = {
  type: string,
  form: string,
  name: string,
  strength: string,
  frequency: string,
  remark: string,
  submitted: boolean,
  error: string,
  user: UserType
};

