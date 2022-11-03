import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Text, Center } from 'native-base';
import { THEME } from './src/styles/theme';

export default function App() {
  useFonts({ useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="gray.900">
        <Text color="white" fontSize={24}>
          Hello React Native!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}


