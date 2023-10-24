import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainComponent from './components/MainComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> JAi HO react native baba ki !! </Text>
      <Button title=' Jai Ho' > </Button>
      <Text> Second Text Data </Text>
      <Button title='Second BTN' >  </Button>
      <StatusBar style="auto" />
      < MainComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
