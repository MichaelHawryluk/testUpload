import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'react-feather';

class MyClass extends React.Component {
  render() {
    return <Camera />
  }
}


const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const Greetings = () => {
  return (
      <View style={[styles.center, {top:50}]}>
        <Greeting name = 'Spike' />
        <Greeting name = 'Neko' />
        <Greeting name = 'Kristofferson' />
        <Greeting name = 'Gene' />
        <Greeting name = 'Willie' />

        </View>
  );
}

export default Greetings;

// export default function App() {
//   return (
//     <View style={styles.container}>
//        <Text style={[styles.setFontSizeFour]}>Welcome to the createIT App{"\n"}</Text>
//       <Text>Bigger font here COOOOOL</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  setFontSizeFour: {
    fontSize: 25 // Define font size here in Pixels
  },

});
