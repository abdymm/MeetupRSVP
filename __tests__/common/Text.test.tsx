import React from 'react';
import Text from '@Components/Text';
import {render, screen} from '@testing-library/react-native';

describe('Text', () => {
  test('inner text rendered correctly', () => {
    render(<Text>Hello</Text>);
    const {getByText} = screen;
    const text = getByText(/hello/i);
    expect(text.props.children).toEqual('Hello');
  });
  test('inner text rendered correctly in bold', () => {
    render(<Text bold>Hello</Text>);
    const {getByText} = screen;
    const text = getByText(/hello/i);

    expect(text.props.style[2].fontFamily).toEqual('Poppins-SemiBold');
  });
});
