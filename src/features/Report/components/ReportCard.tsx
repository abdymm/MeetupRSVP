import {Fonts, Spacing} from '@Constants/Metrics';
import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms} from 'react-native-size-matters';
import {Colors} from '@Constants';
import {Text} from '@Components';

interface Props {
  value: number;
  label: string;
  icon?: string;
  iconSize?: number;
}

const ReportCard = ({value, label, icon, iconSize}: Props) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <View style={styles.valueContainer}>
            <Text style={styles.reportValue}>{value}</Text>
            <Text style={styles.reportLabel}>{label}</Text>
          </View>
          <MaterialCommunityIcons
            name={icon || 'account-multiple'}
            color={Colors.primary}
            size={ms(iconSize || 32)}
          />
        </View>
      </Card.Content>
    </Card>
  );
};
export default ReportCard;
const styles = ScaledSheet.create({
  card: {
    flex: 1,
    marginHorizontal: Spacing.h.sm,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueContainer: {
    marginRight: Spacing.h.tn,
  },
  reportValue: {
    fontSize: Fonts.title3,
  },
  reportLabel: {
    fontSize: '9@mvs0.3',
  },
});
