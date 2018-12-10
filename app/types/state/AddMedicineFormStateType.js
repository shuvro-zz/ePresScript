import type {UserType} from "../common/UserType";

export  type AddMedicineFormStateType = {

  currentMedicineForm: string,
  currentMedicineName: string,
  currentMedicineStrength: string,
  currentMedicineFrequency: string,
  currentMedicineRemark: string,
  submitted: boolean,
  user: ?UserType,
  error: string
};
