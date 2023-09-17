import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Client as Ice}  from './Client.js';
//import { Ice } from '@env';

const apps = {
  ice: Ice
};
AppRegistry.registerComponent(ice, () => apps[Ice]);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test </Text>
      <Ice></Ice>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
