import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from '@Registration/screens';
import UserScreen from '@User/screens';

const Stack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Registration'}
          component={RegistrationScreen}
          options={{title: 'Registration'}}
        />
        <Stack.Screen
          name={'User'}
          component={UserScreen}
          options={{title: 'User'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
