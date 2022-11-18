import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

import Text from './Text';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type OptionType = {
  label: string;
  value: string | number;
  icon?: string;
};

interface Props {
  label: string;
  options: Array<OptionType>;
  value: string | number;
  onValueChange: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const RadioInput = ({
  label,
  options,
  containerStyle,
  onValueChange,
  value,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.radioGroup}>
        {options.map((option, index) => {
          const toggleColorStyle =
            value === option.value ? Colors.light : Colors.dark;
          const backgroundColorStyle =
            value === option.value ? Colors.primary : Colors.transparent;

          const isFirstItem = index === 0;
          const isLastItem = index === options.length - 1;
          const borderRadius = 100;
          const borderRadiusStyle = {
            borderBottomLeftRadius: isFirstItem ? borderRadius : 0,
            borderTopLeftRadius: isFirstItem ? borderRadius : 0,
            borderBottomRightRadius: isLastItem ? borderRadius : 0,
            borderTopRightRadius: isLastItem ? borderRadius : 0,
          };

          return (
            <TouchableOpacity
              style={[
                styles.radioContainer,
                {
                  backgroundColor: backgroundColorStyle,
                  ...borderRadiusStyle,
                },
              ]}
              key={option.value}
              onPress={() => {
                onValueChange(option.value);
              }}>
              {option.icon && (
                <MaterialCommunityIcons
                  name={option.icon}
                  color={toggleColorStyle}
                  size={ms(22)}
                />
              )}
              <Text style={[styles.radioLabel, {color: toggleColorStyle}]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default RadioInput;

const styles = ScaledSheet.create({
  container: {},
  radioGroup: {
    flexDirection: 'row',
  },
  radioContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: Colors.placeholder,
    paddingVertical: Spacing.v.rg,
  },
  radioLabel: {
    fontSize: Fonts.subhead,
    marginLeft: Spacing.h.sm,
  },
  label: {
    marginBottom: Spacing.v.rg,
    fontSize: Fonts.subhead,
  },
});
