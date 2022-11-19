import Colors from './Colors';
import {Profession} from './Enum';
import {Fonts} from './Metrics';

export const USER_DATA = [
  {
    id: '123qwe',
    name: 'Abdy Malik Mulky',
    dob: new Date(),
    profession: Profession.Employed,
    locality: 'Jakarta',
    numberOfGuest: 2,
    address:
      'Jl. Prof. Dr. Satrio Blok C-4 Kav. 16-17, KuninganTimur, Jakarta Selatan, 12950.',
  },
  {
    id: '124qwe',
    name: 'Malik Abdy',
    dob: new Date(),
    profession: Profession.Employed,
    locality: 'Bandung',
    numberOfGuest: 0,
    address:
      'Komp. Cikoneng Sakinah Regency No. 14, Kabupaten Bandung, Jawa Barat 40288',
  },
  {
    id: '125qwe',
    name: 'Mulky Abdy',
    dob: new Date(),
    profession: Profession.Student,
    locality: 'Dubai',
    numberOfGuest: 1,
    address:
      'Springdales School Dubai Al Quoz 4, Near Jumeirah University P.O. Box 115930. Dubai, United Arab Emirates.',
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
  legendFontSize: Fonts.footnote,
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
