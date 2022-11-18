import {View} from 'react-native';
import React from 'react';

import {User} from '@Types/User';
import {Text} from '@Components';
import {Card} from 'react-native-paper';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  professionEmployedIcon,
  professionStudentIcon,
} from '@Registration/constants/options';
import {Profession} from '@Constants/Enum';

interface Props {
  user: User;
}

const UserItem = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.content}>
            <View style={styles.labelContainer}>
              <Text style={styles.title}>{user.name}</Text>
              <Text style={styles.locality}>{user.locality}</Text>
              <Text style={styles.nog}>
                Number of guests: {user.numberOfGuest.toString()}
              </Text>
            </View>

            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={
                  user.profession === Profession.Employed
                    ? professionEmployedIcon
                    : professionStudentIcon
                }
                color={Colors.gray}
                size={ms(32)}
              />
              <Text style={styles.profession}>{user.profession}</Text>
            </View>
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
    borderLeftWidth: 6,
    borderLeftColor: Colors.primary,
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
