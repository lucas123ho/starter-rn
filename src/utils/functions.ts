import { Platform } from 'react-native';

interface PlatformProps {
  ios: any;
  android: any;
}

export function plataform({ ios, android }: PlatformProps): any {
  return Platform.OS === 'ios' ? ios : android;
}