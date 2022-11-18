import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RegistrationScreen from '@Registration/screens';
import UserScreen from '@User/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RouteNames} from './Routes';
import ReportScreen from '@Report/screens';
import {ScaledSheet} from 'react-native-size-matters';

const Drawer = createDrawerNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={RouteNames.Registration}
        screenOptions={{
          drawerLabelStyle: styles.drawerItemLabel,
        }}>
        <Drawer.Screen
          name={RouteNames.Registration}
          component={RegistrationScreen}
          options={{headerTitle: RouteNames.Registration.toUpperCase()}}
        />
        <Drawer.Screen
          name={RouteNames.User}
          component={UserScreen}
          options={{headerTitle: RouteNames.Registration.toUpperCase()}}
        />
        <Drawer.Screen
          name={RouteNames.Report}
          component={ReportScreen}
          options={{headerTitle: RouteNames.Registration.toUpperCase()}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigationContainer;

const styles = ScaledSheet.create({
  drawerItemLabel: {
    fontFamily: 'Poppins-Regular',
  },
});
