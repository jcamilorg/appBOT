import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//
export default function App() {
  return (
    <View style={styles.container}>
      <Text>BOT ("be on time app")</Text>
      <Text>Never miss a task</Text>
      <Text>by. Juan Camilo Ramirez, Sergio Guyumus, Jefferson Hernandez</Text>
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
