import { TextInputProps, ViewProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  containerProps?: ViewProps;
}