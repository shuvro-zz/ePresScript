/**
 * @flow
 */

import type {UserType} from "../common/UserType";

export type AuthenticationActionType = {
  type: string,
  user: UserType,
  error: string
};

