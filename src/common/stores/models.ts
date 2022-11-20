import {Models} from '@rematch/core';
import registration from '@Registration/models/registration';
export interface RootModel extends Models<RootModel> {
  registration: typeof registration;
}
export const models: RootModel = {registration};
