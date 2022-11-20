import {Profession} from '@Constants/Enum';

export interface User {
  id?: string;
  name: string;
  dob: Date | undefined;
  profession: Profession | undefined;
  locality: string;
  numberOfGuest: number;
  address: string;
}
