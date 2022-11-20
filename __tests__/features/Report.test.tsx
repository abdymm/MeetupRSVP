import React from 'react';
import Report from '@Report/screens';
import {render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '@Stores';
import {REPORT_DATA} from '@Constants/Mocks';
import {Profession} from '@Constants/Enum';

describe('Report', () => {
  test('render report by ages ', async () => {
    const component = (
      <Provider store={store}>
        <Report />
      </Provider>
    );
    render(component);
    const {getByText} = screen;
    const reportDataAge = REPORT_DATA.reportByAge[0];
    const cardAgeLabel = getByText(reportDataAge.label);
    const cardAgeValue = getByText(reportDataAge.value.toString());
    expect(cardAgeLabel).toBeTruthy();
    expect(cardAgeValue).toBeTruthy();
  });
  test('render report average guest ', async () => {
    const component = (
      <Provider store={store}>
        <Report />
      </Provider>
    );
    render(component);
    const {getByText} = screen;
    const reportAverageGuests = REPORT_DATA.reportAverageGuests;
    const averageGuestLabel = getByText('Average Guests');
    const averageGuestValue = getByText(reportAverageGuests.toString());

    expect(averageGuestLabel).toBeTruthy();
    expect(averageGuestValue).toBeTruthy();
  });
  test('render report professsion ', async () => {
    const component = (
      <Provider store={store}>
        <Report />
      </Provider>
    );
    render(component);
    const {getByText} = screen;
    const reportProfession = REPORT_DATA.reportByProfession;
    const reportLabel = getByText(Profession.Employed);
    const reportValue = getByText(reportProfession.Employed.toString());

    expect(reportLabel).toBeTruthy();
    expect(reportValue).toBeTruthy();
  });
  test('render report localities ', async () => {
    const component = (
      <Provider store={store}>
        <Report />
      </Provider>
    );
    render(component);
    const {getByText} = screen;
    const reportLocality = REPORT_DATA.reportByLocalities[0];
    const reportLabel = getByText(reportLocality.label);
    const reportValue = getByText(`${reportLocality.value} guests`);

    expect(reportLabel).toBeTruthy();
    expect(reportValue).toBeTruthy();
  });
});
