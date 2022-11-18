import {StyleSheet, Text as NativeText, TextProps} from 'react-native';
import React from 'react';

import {Colors} from '@Constants';

interface Props extends TextProps {
  bold?: boolean;
}

const Text = (props: Props) => {
  const fontFamily = props.bold ? 'Poppins-SemiBold' : 'Poppins-Regular';
  return (
    <NativeText {...props} style={[styles.text, props.style, {fontFamily}]} />
  );
};
export default Text;
const styles = StyleSheet.create({
  text: {
    color: Colors.dark,
  },
});
