import React from 'react';
import {View} from 'react-native';
import {Text} from '@Components';
import styles from './styles';
import ReportCard from '@Report/components/ReportCard';
import {
  professionEmployedIcon,
  professionStudentIcon,
} from '@Registration/constants/options';
import {Card} from 'react-native-paper';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>By Age Range</Text>
        <View style={styles.reportSection}>
          <ReportCard label="Age 13-18" value={123} />
          <ReportCard label="Age 18-25" value={90} />
          <ReportCard label="Age 25+" value={4} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Average Guests</Text>
        <View style={styles.reportSection}>
          <ReportCard label="Average guests" value={45.453} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Employed & Students</Text>
        <View style={styles.reportSection}>
          <ReportCard
            label="Employed"
            value={75}
            icon={professionEmployedIcon}
          />
          <ReportCard label="Student" value={85} icon={professionStudentIcon} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>By Localities</Text>
        <Card style={styles.cardRow}>
          <Card.Content>
            <View style={styles.cardRowContent}>
              <Text style={styles.reportLabel}>Dubai</Text>
              <Text style={styles.reportValue}>43 guests</Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={styles.cardRow}>
          <Card.Content>
            <View style={styles.cardRowContent}>
              <Text style={styles.reportLabel}>Jakarta</Text>
              <Text style={styles.reportValue}>8 guests</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default ReportScreen;
