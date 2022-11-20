import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';

import {TextInput as NativeTextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '@Utils/Date';

interface Props {
  label: string;
  onDatePicked: (date: Date) => void;
}

const DatepicketInput = ({label, onDatePicked}: Props) => {
  const textInputRef = useRef<TextInput>();
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const onSelectDate = (selectedDate: Date) => {
    textInputRef?.current && textInputRef?.current.blur();
    setOpen(false);
    onDatePicked(selectedDate);
    setDate(selectedDate);
  };

  return (
    <>
      <NativeTextInput
        testID="date-picker-input"
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
        onConfirm={onSelectDate}
        onCancel={() => {
          setOpen(false);
          textInputRef?.current && textInputRef?.current.blur();
        }}
      />
    </>
  );
};
export default DatepicketInput;
