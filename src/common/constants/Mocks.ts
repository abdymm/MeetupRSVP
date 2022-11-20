import Colors from './Colors';
import {Profession} from './Enum';

export const USER_DATA = [
  {
    id: 'da7453e3-e30b-4508-b44a-f548d1d88266',
    name: 'Ian Bigby',
    locality: 'Jarānwāla',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 0,
    address: '0 Dexter Hill',
  },
  {
    id: 'd6023256-2829-4c7a-b050-274272fa8d1c',
    name: 'Isahella Kolakovic',
    locality: 'Goya',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 2,
    address: '9461 Grover Drive',
  },
  {
    id: 'c72ec7bd-d3c4-450e-8514-78d1aa95e980',
    name: 'Loretta Logsdail',
    locality: 'Paris 20',
    dob: new Date(),
    profession: Profession.Student,
    numberOfGuest: 0,
    address: '35292 Eggendart Parkway',
  },
  {
    id: 'f9f3a131-5037-4e77-baaa-80ce804b389b',
    name: 'Bartlet Budd',
    locality: 'Taluksangay',
    dob: new Date(),
    profession: Profession.Student,
    numberOfGuest: 0,
    address: '770 Shelley Trail',
  },
  {
    id: 'a4fb4070-38b2-4a0d-975d-a5fd629508ab',
    name: 'Shay Mateus',
    locality: 'Ţāqchah Khānah',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 0,
    address: '71902 Browning Avenue',
  },
  {
    id: '099d6688-3209-4ded-a6b4-b4d6f504642b',
    name: 'Ryun Guile',
    locality: 'Baluk',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 1,
    address: '8 Crest Line Drive',
  },
  {
    id: 'a9a86698-36b2-45b7-beeb-7fc3d8d2caee',
    name: 'Rheba Cormack',
    locality: 'Mahābād',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 1,
    address: '54976 Hauk Hill',
  },
  {
    id: '333db533-21cb-4a92-b5c5-5eded53f0795',
    name: 'Antonino Ribou',
    locality: 'Virovitica',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 2,
    address: '52928 Artisan Hill',
  },
  {
    id: '90b11217-2cdb-4f3d-af0f-b50f33103055',
    name: 'Bogey Rimes',
    locality: 'Tha Ruea',
    dob: new Date(),
    profession: Profession.Employed,
    numberOfGuest: 2,
    address: '64 Corben Lane',
  },
  {
    id: 'f3177748-a67e-4239-90a2-ece5d107ad19',
    name: 'Falkner Le Grand',
    locality: 'Verkhniy Landekh',
    dob: new Date(),
    profession: Profession.Student,
    numberOfGuest: 1,
    address: '140 Sommers Street',
  },
];

export const REPORT_DATA = {
  reportByAge: [
    {
      label: 'Age 13-18',
      value: 12,
    },
    {
      label: 'Age 18-25',
      value: 43,
    },
    {
      label: '25+',
      value: 22,
    },
  ],
  reportByProfession: {
    [Profession.Employed]: 56,
    [Profession.Student]: 21,
  },
  reportAverageGuests: 34.23,
  reportByLocalities: [
    {
      label: 'Dubai',
      value: 23,
    },
    {
      label: 'Jakarta',
      value: 19,
    },
    {
      label: 'Bandung',
      value: 35,
    },
  ],
};

const legendStyle = {
  legendFontColor: Colors.gray,
  legendFontSize: '13@mvs0.3',
};
export const REPORT_DATA_VIA_CHART = {
  reportByAges: [
    {
      name: 'Age 13-18',
      population: 12,
      color: Colors.tertiary,
      ...legendStyle,
    },
    {
      name: 'Age 18-25',
      population: 43,
      color: Colors.primary,
      ...legendStyle,
    },
    {
      name: 'Age 25+',
      population: 22,
      color: Colors.success,
      ...legendStyle,
    },
  ],
  reportByProfession: [
    {
      name: Profession.Employed,
      population: 56,
      color: Colors.primary,
      ...legendStyle,
    },
    {
      name: Profession.Student,
      population: 21,
      color: Colors.tertiary,
      ...legendStyle,
    },
  ],
};
