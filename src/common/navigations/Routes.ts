import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export enum RouteNames {
  Root = 'Root',
  Registration = 'Registration',
  User = 'User',
  UserDetail = 'UserDetail',
  Report = 'Report',
}
export interface Routes extends ParamListBase {
  [RouteNames.Registration]: undefined;
  [RouteNames.User]: undefined;
  [RouteNames.UserDetail]: {id: string};
  [RouteNames.Report]: undefined;
}

export type NavigationProps = NavigationProp<Routes>;

export type RouteProps<R extends keyof Routes> = RouteProp<Routes, R>;
