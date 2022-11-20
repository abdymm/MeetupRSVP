import {Models} from '@rematch/core';
import registration from '@Registration/models/registration';
import user from '@User/models/user';
export interface RootModel extends Models<RootModel> {
  registration: typeof registration;
  user: typeof user;
}
export const models: RootModel = {registration, user};
