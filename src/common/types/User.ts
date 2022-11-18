import {Profession} from '@Constants/Enum';

export interface User {
  name: string;
  dob: Date | undefined;
  profession: Profession | undefined;
  locality: string;
  numberOfGuest: number;
  address: string;
}
