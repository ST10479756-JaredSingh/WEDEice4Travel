import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
 
export default function App() {
  const [color, setColor] = useState('red'); // default value
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Select Your Favorite Color:</Text>
 
      <Picker
        selectedValue={color}
        onValueChange={(itemValue) => setColor(itemValue)}
        style={styles.picker}
>
<Picker.Item label="Red" value="red" />
<Picker.Item label="Blue" value="blue" />
<Picker.Item label="Green" value="green" />
<Picker.Item label="Yellow" value="yellow" />
</Picker>
 
      <Text style={styles.result}>You selected: {color}</Text>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  picker: { height: 50, width: 200 },
  result: { marginTop: 20, fontSize: 18, color: 'purple' },
});