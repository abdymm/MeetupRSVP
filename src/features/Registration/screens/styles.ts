import {Colors} from '@Constants';
import {Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    padding: Spacing.h.xl,
  },
  textInput: {
    marginBottom: Spacing.v.rg,
  },
  textInputArea: {
    height: '100@mvs',
  },
  radioInput: {
    marginVertical: Spacing.v.rg,
  },
  buttonContainer: {
    marginTop: Spacing.v.xxl,
  },
  wrapper: {
    backgroundColor: Colors.pageBackground,
  },
});

export default styles;
