import {Colors} from '@Constants';
import {Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    padding: Spacing.h.xl,
  },
  listContainer: {
    flex: 1,
  },
});

export default styles;
