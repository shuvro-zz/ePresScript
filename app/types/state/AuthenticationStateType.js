
/**
 * @flow
 */

import type {UserType} from "../common/UserType";

export type AuthenticationStateType = {
  user: ?UserType,
  loggedIn: boolean,
  loggingIn: boolean,
  error: string
};
