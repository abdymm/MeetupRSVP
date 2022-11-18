import {DatepicketInput, RadioInput} from '@Components';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

enum Profession {
  Employed = 'Employed',
  Student = 'Student',
}

interface User {
  name: string;
  dob: Date | undefined;
  profession: Profession | undefined;
  locality: string;
  numberOfGuest: number;
  address: string;
}

const INITIAL_FORM = {
  name: '',
  dob: undefined,
  profession: undefined,
  locality: '',
  numberOfGuest: 0,
  address: '',
};

const professionOptions = [
  {
    label: Profession.Employed,
    value: Profession.Employed,
    icon: 'account-tie-outline',
  },
  {
    label: Profession.Student,
    value: Profession.Student,
    icon: 'school-outline',
  },
];
const numberOfGuestOptions = [
  {
    label: 'Alone',
    value: 0,
  },
  {
    label: '1 Guest',
    value: 1,
  },
  {
    label: '2 Guests',
    value: 2,
  },
];

const RegistrationScreen = () => {
  const [form, setForm] = useState<User>(INITIAL_FORM);

  const onChange = (key: string, value: string | number) => {
    setForm({...form, [key]: value});
  };
  const onRegister = () => {
    console.log('form', form);
  };
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
            <Button mode="contained" onPress={onRegister}>
              Register
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default RegistrationScreen;
