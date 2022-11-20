import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {Dispatch, RootState} from '@Stores';
import {User} from 'src/common/types/User';

import {DatepicketInput, RadioInput} from '@Components';
import {Alert, BackHandler, ScrollView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import {showToast, ToastType} from '@Utils/Notification';

import {
  numberOfGuestOptions,
  professionOptions,
} from '@Registration/constants/options';

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const INITIAL_FORM = {
  name: '',
  dob: undefined,
  profession: undefined,
  locality: '',
  numberOfGuest: 0,
  address: '',
};

const RegistrationScreen = ({registration, register}: Props) => {
  const {data, loading, error} = registration;

  const [form, setForm] = useState<User>(INITIAL_FORM);

  useEffect(() => {
    const formValues = Object.values(form);
    const isEditing = formValues.find(
      value => value !== '' || value !== null || value,
    );

    const backAction = () => {
      if (isEditing) {
        Alert.alert('Exit App', 'All of your inputs will be lost', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      } else {
        BackHandler.exitApp();
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [form]);

  const isInputValid = useMemo(() => {
    const formValues = Object.values(form);
    return !!formValues.every(value => value !== '' && value !== undefined);
  }, [form]);

  const onChange = (key: string, value: string | number | Date) => {
    setForm({...form, [key]: value});
  };
  const onRegister = () => {
    if (isInputValid) {
      register(form);
    } else {
      showToast(
        'Please fill up all fieldsa before you register',
        ToastType.Error,
      );
    }
  };

  useEffect(() => {
    if (!error && data) {
      setForm(INITIAL_FORM);
      showToast(data.message);
    }
  }, [data, error]);

  return (
    <ScrollView style={styles.wrapper}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <TextInput
            label="Name"
            value={form?.name}
            mode={'outlined'}
            onChangeText={text => onChange('name', text)}
            style={styles.textInput}
          />

          <DatepicketInput
            label="Date of Birth"
            onDatePicked={text => onChange('dob', text)}
          />

          <RadioInput
            label="Profession"
            options={professionOptions}
            onValueChange={value => onChange('profession', value)}
            value={form?.profession?.toString() ?? ''}
            containerStyle={styles.radioInput}
          />

          <TextInput
            label="Locality"
            value={form?.locality}
            mode={'outlined'}
            onChangeText={text => onChange('locality', text)}
            style={styles.textInput}
          />

          <RadioInput
            label="Number of guests"
            options={numberOfGuestOptions}
            onValueChange={value => onChange('numberOfGuest', value)}
            value={form?.numberOfGuest}
            containerStyle={styles.radioInput}
          />

          <TextInput
            label="Address"
            value={form?.address?.toString()}
            mode={'outlined'}
            multiline
            onChangeText={text => onChange('address', text)}
            style={styles.textInputArea}
          />

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={onRegister}
              loading={loading}
              disabled={loading}>
              Register
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const mapState = (state: RootState) => ({
  registration: state.registration,
});
const mapDispatch = (dispatch: Dispatch) => ({
  register: (user: User) => dispatch.registration.register(user),
});
export default connect(mapState, mapDispatch)(RegistrationScreen);
