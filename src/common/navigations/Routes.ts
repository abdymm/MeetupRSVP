import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export enum RouteNames {
  Registration = 'Registration',
  User = 'User',
  Report = 'Report',
}
export interface Routes extends ParamListBase {
  [RouteNames.Registration]: undefined;
  [RouteNames.User]: undefined;
  [RouteNames.Report]: undefined;
}

export type NavigationProps = NavigationProp<Routes>;

export type RouteProps<R extends keyof Routes> = RouteProp<Routes, R>;
