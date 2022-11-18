import {Profession} from '@Constants/Enum';

export const professionEmployedIcon = 'account-tie-outline';
export const professionStudentIcon = 'school-outline';
export const professionOptions = [
  {
    label: Profession.Employed,
    value: Profession.Employed,
    icon: professionEmployedIcon,
  },
  {
    label: Profession.Student,
    value: Profession.Student,
    icon: professionStudentIcon,
  },
];
export const numberOfGuestOptions = [
  {
    label: 'Alone',
    value: 0,
  },
  {
    label: '1 Guest',
    value: 1,
  },
  {
    label: '2 Guests',
    value: 2,
  },
];
