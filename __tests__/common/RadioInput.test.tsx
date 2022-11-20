import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {RadioInput} from '@Components';

describe('RadioInput', () => {
  let value = '';
  const options = [
    {
      label: 'first',
      value: '1',
    },
    {
      label: 'second',
      value: '2',
    },
  ];
  const handleOnChange = jest.fn(data => (value = data));
  test('render initial value', () => {
    render(
      <RadioInput
        label="Profession"
        options={options}
        onValueChange={selectedValue => handleOnChange(selectedValue)}
        value={value}
      />,
    );

    expect(value).toEqual('');
  });
  test('render selected value correctly', () => {
    render(
      <RadioInput
        label="Profession"
        options={options}
        onValueChange={selectedValue => handleOnChange(selectedValue)}
        value={value}
      />,
    );
    const {getByText} = screen;

    const firstOption = options[0];
    const buttonFirstOption = getByText(firstOption.label);
    fireEvent.press(buttonFirstOption);
    expect(value).toEqual(firstOption.value);
  });
});
