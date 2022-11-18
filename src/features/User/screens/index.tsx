import React from 'react';
import {View} from 'react-native';
import {Text} from '@Components';

import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, RouteNames} from '@Navigations/Routes';

import styles from './styles';

const UserScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Text>User</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate(RouteNames.Registration);
        }}>
        RSVP NEW USER
      </Button>
    </View>
  );
};

export default UserScreen;
