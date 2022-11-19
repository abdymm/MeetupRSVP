import React from 'react';

import {Text} from '@Components';
import {Card} from 'react-native-paper';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@Constants';

interface Props {
  label: string;
  value?: string;
}

const UserDetailSection = ({label, value}: Props) => {
  return (
    <Card style={styles.section}>
      <Card.Content>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value ?? '-'}</Text>
      </Card.Content>
    </Card>
  );
};
export default UserDetailSection;
const styles = ScaledSheet.create({
  section: {
    marginBottom: Spacing.v.rg,
    borderTopColor: Colors.primary,
    borderTopWidth: 4,
  },
  value: {
    fontSize: Fonts.subhead,
  },
  label: {
    fontSize: Fonts.caption1,
    color: Colors.gray,
    marginBottom: Spacing.v.sm,
  },
});
