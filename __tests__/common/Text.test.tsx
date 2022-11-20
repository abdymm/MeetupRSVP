import React from 'react';
import Text from '@Components/Text';
import {render, screen} from '@testing-library/react-native';

describe('Text', () => {
  test('inner text rendered correctly', () => {
    render(<Text>Hello</Text>);
    const {getByText} = screen;
    const innerText = getByText(/hello/i);
    expect(innerText.props.children).toEqual('Hello');
  });
});
