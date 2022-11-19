import {Colors} from '@Constants';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    padding: Spacing.h.lg,
  },
  name: {
    textAlign: 'center',
    fontSize: Fonts.title1,
  },
  section: {
    marginBottom: Spacing.v.rg,
    borderTopColor: Colors.primary,
    borderTopWidth: 4,
  },
  value: {
    fontSize: Fonts.subhead,
  },
  label: {
    fontSize: Fonts.caption1,
    color: Colors.gray,
    marginBottom: Spacing.v.sm,
  },
  professionLabel: {
    color: Colors.primary,
  },
});

export default styles;
