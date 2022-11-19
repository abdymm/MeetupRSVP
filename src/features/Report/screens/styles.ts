import {Colors} from '@Constants';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    padding: Spacing.h.xl,
  },
  title: {
    fontSize: Fonts.callout,
    marginBottom: Spacing.v.rg,
  },
  reportSection: {
    flexDirection: 'row',
  },
  section: {
    marginBottom: Spacing.v.xl,
  },
  cardRowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.h.lg,
  },
  cardRow: {
    marginBottom: Spacing.v.rg,
  },
  reportLabel: {
    fontSize: Fonts.footnote,
  },
  reportValue: {
    fontSize: Fonts.subhead,
  },
});

export default styles;
