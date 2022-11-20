import {Colors} from '@Constants';
import {Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  searchContainer: {
    paddingHorizontal: Spacing.h.xl,
    marginTop: Spacing.h.xl,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    padding: Spacing.h.xl,
  },
  loading: {
    flex: 1,
    padding: Spacing.v.xl,
  },
});

export default styles;
