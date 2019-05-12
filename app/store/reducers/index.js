// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import medicineState  from '../../features/medicine/reducers';
import securityState  from '../../features/security/reducers';
import uiReducer from '../../features/ui/reducer';
import usermanagementState from '../../features/usermanagement/reducers';
import treatmentState from '../../features/treatment/reducers';
import systemEnvState from '../../features/systemEnv/reducers';
import settingsState from '../../features/settings/reducers';
import prescriptionState from '../../features/prescription/reducers';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    medicineState,
    securityState,
    uiReducer,
    usermanagementState,
    treatmentState,
    systemEnvState,
    settingsState,
    prescriptionState
  });
}
