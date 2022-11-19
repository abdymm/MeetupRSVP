import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RegistrationScreen from '@Registration/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteNames} from './Routes';
import {ScaledSheet} from 'react-native-size-matters';
import UserScreen from '@User/screens';
import UserDetailScreen from '@User/screens/UserDetail';
import ReportScreen from '@Report/screens';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      initialRouteName={RouteNames.Registration}
      screenOptions={{
        drawerLabelStyle: styles.drawerItemLabel,
      }}>
      <Drawer.Screen
        name={RouteNames.Registration}
        component={RegistrationScreen}
        options={{headerTitle: RouteNames.Registration}}
      />

      <Drawer.Screen
        name={RouteNames.User}
        component={UserScreen}
        options={{headerTitle: RouteNames.User}}
      />

      <Drawer.Screen
        name={RouteNames.Report}
        component={ReportScreen}
        options={{headerTitle: RouteNames.Report}}
      />
    </Drawer.Navigator>
  );
};
const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
        <Stack.Screen
          name={RouteNames.Root}
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RouteNames.UserDetail}
          component={UserDetailScreen}
          options={{
            headerTitle: 'Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;

const styles = ScaledSheet.create({
  drawerItemLabel: {
    fontFamily: 'Poppins-Regular',
  },
});
