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
}

const ReportCard = ({value, label, icon}: Props) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <View style={styles.valueContainer}>
            <Text style={styles.reportValue}>{value}</Text>
            <Text style={styles.reportLabel}>{label}</Text>
          </View>
          <MaterialCommunityIcons
            name={icon || 'account'}
            color={Colors.primary}
            size={ms(32)}
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
    marginHorizontal: Spacing.h.tn,
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
