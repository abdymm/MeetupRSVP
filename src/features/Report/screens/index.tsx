import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Text} from '@Components';
import styles from './styles';
import ReportCard from '@Report/components/ReportCard';
import {professionEmployedIcon} from '@Registration/constants/options';
import {Card} from 'react-native-paper';
import {REPORT_DATA, REPORT_DATA_VIA_CHART} from '@Constants/Mocks';
import {Profession} from '@Constants/Enum';
import ReportPieChart from '@Report/components/ReportPieChart';

const ReportScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>By Age Range</Text>

        <ReportPieChart data={REPORT_DATA_VIA_CHART.reportByAges} />

        <View style={styles.reportSection}>
          {REPORT_DATA.reportByAge.map(report => {
            return (
              <ReportCard
                key={report.label}
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

        <ReportPieChart data={REPORT_DATA_VIA_CHART.reportByProfession} />

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
        <Text style={[styles.title, styles.titleLocalities]}>
          By Localities
        </Text>
        <FlatList
          data={REPORT_DATA.reportByLocalities}
          scrollEnabled={false}
          contentContainerStyle={styles.localitiesList}
          renderItem={({item}) => (
            <Card style={styles.cardRow} key={item.label}>
              <Card.Content style={styles.cardRowContent}>
                <View style={styles.cardRowView}>
                  <Text style={styles.reportLabel}>{item.label}</Text>
                  <Text style={styles.reportValue}>{item.value} guests</Text>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default ReportScreen;
