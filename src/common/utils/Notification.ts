import Toast from 'react-native-toast-message';

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

export const showToast = (
  message: string,
  type: ToastType = ToastType.Success,
) => {
  Toast.show({
    type: type,
    text1: 'Notification',
    text2: message,
    position: 'bottom',
  });
};
