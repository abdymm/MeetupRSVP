import {Colors} from '@Constants';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    paddingTop: Spacing.h.xl,
  },
  title: {
    fontSize: Fonts.body,
    marginBottom: Spacing.v.lg,
  },
  reportSection: {
    flexDirection: 'row',
  },
  section: {
    marginBottom: Spacing.v.xxxl,
    paddingHorizontal: Spacing.h.xl,
  },
  cardRowContent: {
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  cardRowView: {
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
  sectionLocalities: {
    flex: 1,
    paddingHorizontal: 0,
  },
  titleLocalities: {
    paddingHorizontal: Spacing.h.xl,
  },
  localitiesList: {
    paddingHorizontal: Spacing.h.xl,
  },
});

export default styles;
