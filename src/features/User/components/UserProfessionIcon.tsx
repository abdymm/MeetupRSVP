import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';

import {Colors} from '@Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Profession} from '@Constants/Enum';
import {Text} from '@Components';
import {
  professionEmployedIcon,
  professionStudentIcon,
} from '@Registration/constants/options';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {Fonts} from '@Constants/Metrics';

interface Props {
  profession: Profession | undefined;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconColor?: string;
  iconSize?: number;
}

const UserProfessionIcon = ({
  profession,
  style,
  labelStyle,
  iconColor,
  iconSize,
}: Props) => {
  return (
    <View style={[styles.iconContainer, style]}>
      <MaterialCommunityIcons
        name={
          profession === Profession.Employed
            ? professionEmployedIcon
            : professionStudentIcon
        }
        color={iconColor || Colors.gray}
        size={ms(iconSize || 32)}
      />
      <Text style={[styles.profession, labelStyle]}>{profession}</Text>
    </View>
  );
};
export default UserProfessionIcon;
const styles = ScaledSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  profession: {
    fontSize: Fonts.caption2,
  },
});
