import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//
export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.header} >
        <Text style={styles.title}>BOT</Text>
        <Text>Never miss a task</Text>
      </View>
      <View style={styles.body}>
        <View style ={styles.containerDays}>
          <Text style={styles.days}>Lunes</Text>
          <Text style={styles.days}>Martes</Text>
        </View>
        <View style ={styles.containerDays}>
          <Text style={styles.days}>Miercoles</Text>
          <Text style={styles.days}>Jueves</Text>
        </View>
        <View style ={styles.containerDays}>
          <Text style={styles.days}>Viernes</Text>
          <Text style={styles.days}>Sabado</Text>
        </View>
        <View style ={styles.containerDays}>
          <Text style={styles.days}>Domingo</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',    
  },

  body: {
    flex:13,
    backgroundColor: '#ffd',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },

  header: {
    flex: 2,
    backgroundColor: '#fcba03',
    alignItems: 'center',
    fontWeight: "bold",
    paddingTop: 30,
    paddingBottom: 10,

  },

  title: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 5,
  },

 containerDays : {
   flex: 1,
   margin: 10,
   flexDirection: 'row',
 },

days: {
  flex:1,
  margin: 5,
  backgroundColor: "#e8d102",
  textAlign: 'center',
  color: '#fff',
},

});
