import React from 'react';
import {View} from 'react-native';
import {Text} from '@Components';

import styles from './styles';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@Navigations/Routes';

const RegistrationScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Text>REGISRTATION</Text>
      <Button
        onPress={() => {
          navigation.navigate('User');
        }}>
        User
      </Button>
    </View>
  );
};

export default RegistrationScreen;
