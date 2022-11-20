import React from 'react';
import {View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {RouteNames, RouteProps} from '@Navigations/Routes';

import styles from './styles';
import {Text} from '@Components';
import {formatDate} from '@Utils/Date';
import {Card} from 'react-native-paper';
import UserProfessionIcon from '@User/components/UserProfessionIcon';
import {Colors} from '@Constants';
import UserDetailSection from '@User/components/UserDetailSection';
import {USER_DATA} from '@Constants/Mocks';

const UserDetailScreen = () => {
  const {id} = useRoute<RouteProps<RouteNames.UserDetail>>().params;
  const user = USER_DATA.find(item => item.id === id);

  return (
    <View style={styles.container}>
      <Card style={styles.section}>
        <Card.Content>
          <UserProfessionIcon
            profession={user?.profession}
            iconColor={Colors.primary}
            labelStyle={styles.professionLabel}
          />
          <Text style={styles.name}>{user?.name}</Text>
        </Card.Content>
      </Card>
      <UserDetailSection
        label="Locality"
        value={`${user?.locality}${
          user?.dob ? `, ${formatDate(user?.dob)}` : ''
        }`}
      />
      <UserDetailSection label="Full Address" value={user?.address} />
      <UserDetailSection
        label="Additional guests"
        value={`${
          user?.numberOfGuest === 0 ? 'Without' : `+${user?.numberOfGuest}`
        } guests`}
      />
    </View>
  );
};

export default UserDetailScreen;
