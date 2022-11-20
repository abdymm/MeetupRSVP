import React from 'react';
import Registration from '@Registration/screens';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '@Stores';

// Sorry, still have bad testing skills & knowledge, but its actually my current goal to go deep into it at the moment

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return {KeyboardAwareScrollView};
});
jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));
describe('Registration', () => {
  test('render ', async () => {
    const component = (
      <Provider store={store}>
        <Registration />
      </Provider>
    );
    render(component);
    const {getByText} = screen;
    const registerButton = getByText('Register');
    fireEvent.press(registerButton);
  });
});
