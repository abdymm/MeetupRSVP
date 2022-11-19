import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from '@Components';
import styles from './styles';
import ReportCard from '@Report/components/ReportCard';
import {professionEmployedIcon} from '@Registration/constants/options';
import {Card} from 'react-native-paper';
import {REPORT_DATA} from '@Constants/Mocks';
import {Profession} from '@Constants/Enum';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>By Age Range</Text>
        <View style={styles.reportSection}>
          {REPORT_DATA.reportByAge.map(report => {
            return (
              <ReportCard
                label={report.label}
                value={report.value}
                iconSize={24}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Average Guests</Text>
        <View style={styles.reportSection}>
          <ReportCard
            label="Average guests"
            value={REPORT_DATA.reportAverageGuests}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Employed & Students</Text>
        <View style={styles.reportSection}>
          <ReportCard
            label={Profession.Employed}
            value={REPORT_DATA.reportByProfession[Profession.Employed]}
            icon={professionEmployedIcon}
          />
          <ReportCard
            label={Profession.Student}
            value={REPORT_DATA.reportByProfession[Profession.Student]}
            icon={professionEmployedIcon}
          />
        </View>
      </View>
      <View style={[styles.section, styles.sectionLocalities]}>
        <Text style={[styles.title, styles.titleLocalities]}>By Localities</Text>
        <FlatList
          data={REPORT_DATA.reportByLocalities}
          contentContainerStyle={styles.localitiesList}
          renderItem={({item}) => (
            <Card style={styles.cardRow}>
              <Card.Content>
                <View style={styles.cardRowContent}>
                  <Text style={styles.reportLabel}>{item.label}</Text>
                  <Text style={styles.reportValue}>{item.value} guests</Text>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </View>
  );
};

export default ReportScreen;
