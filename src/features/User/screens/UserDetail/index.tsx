import React from 'react';
import {View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {RouteNames, RouteProps} from '@Navigations/Routes';

import styles from './styles';
import {Text} from '@Components';
import {formatDate} from '@Utils/Date';
import {USER_DATA} from '..';
import {Card} from 'react-native-paper';
import UserProfessionIcon from '@User/components/UserProfessionIcon';
import {Colors} from '@Constants';

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
      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.label}>Locality</Text>
          <Text style={styles.value}>
            {user?.locality}
            {user?.dob ? `, ${formatDate(user?.dob)}` : '-'}
          </Text>
        </Card.Content>
      </Card>
      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.label}>Full Address</Text>
          <Text style={styles.value}>{user?.address}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.label}>Additional guests</Text>
          <Text style={styles.value}>{`+${user?.numberOfGuest} guests`}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default UserDetailScreen;
