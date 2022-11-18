import {StyleSheet, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';

import {TextInput as NativeTextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '@Utils/Date';

interface Props {
  label: string;
  onDatePicked: (value: string) => void;
}

const DatepicketInput = ({label, onDatePicked}: Props) => {
  const textInputRef = useRef<TextInput>();
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  return (
    <>
      <NativeTextInput
        ref={textInputRef}
        label={label}
        mode={'outlined'}
        value={date ? formatDate(date) : ''}
        onFocus={() => {
          setOpen(true);
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date ?? new Date()}
        mode={'date'}
        maximumDate={new Date()}
        onConfirm={selectedDate => {
          setOpen(false);
          onDatePicked(selectedDate.toISOString());
          setDate(selectedDate);
          textInputRef?.current && textInputRef?.current.blur();
        }}
        onCancel={() => {
          setOpen(false);
          textInputRef?.current && textInputRef?.current.blur();
        }}
      />
    </>
  );
};
export default DatepicketInput;
const styles = StyleSheet.create({});
