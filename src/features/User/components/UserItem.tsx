import {View} from 'react-native';
import React from 'react';

import {User} from '@Types/User';
import {Text} from '@Components';
import {Card} from 'react-native-paper';
import {Fonts, Radius, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@Constants';
import UserProfessionIcon from './UserProfessionIcon';

interface Props {
  user: User;
  onPress: (id: string) => void;
}

const UserItem = ({user, onPress}: Props) => {
  return (
    <View
      style={styles.container}
      accessibilityLabel={`${user.id}-user-container`}>
      <Card
        onPress={() => {
          user?.id && onPress(user.id);
        }}
        style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.content}>
            <View style={styles.labelContainer}>
              <Text style={styles.title}>{user.name}</Text>
              <Text style={styles.locality}>{user.locality}</Text>
              <Text style={styles.nog}>
                Number of guests: {user.numberOfGuest.toString()}
              </Text>
            </View>

            <UserProfessionIcon profession={user.profession} />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
export default UserItem;
const styles = ScaledSheet.create({
  container: {
    marginVertical: Spacing.v.rg,
  },
  card: {
    borderTopLeftRadius: Radius.sm,
    borderBottomLeftRadius: Radius.sm,
  },
  cardContent: {
    borderLeftWidth: 6,
    borderLeftColor: Colors.primary,
    borderTopLeftRadius: Radius.sm,
    borderBottomLeftRadius: Radius.sm,
  },
  title: {
    fontSize: Fonts.body,
  },
  locality: {
    fontSize: Fonts.subhead,
  },
  nog: {
    fontSize: Fonts.footnote,
    color: Colors.gray,
    marginTop: Spacing.v.sm,
  },
  labelContainer: {},
  iconContainer: {
    alignItems: 'center',
  },
  profession: {
    fontSize: Fonts.caption2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
