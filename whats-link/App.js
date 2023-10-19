import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [num, setNum] = useState('');
  let url = 'https://api.whatsapp.com/send/?phone=%2B55';
  let url2 = '&text&type=phone_number&app_absent=0';

  const gerar = async () => {
    await Linking.openURL(url + num + url2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Número telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: 66998761234"
        keyboardType="numeric"
        onChangeText={(text) => setNum(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={gerar}>
        <Text style={styles.txt}>ABRIR CONVERSA</Text>
      </TouchableOpacity>
      <Text style={styles.tDono}>Desenvolvido por PedroTosta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    fontSize: 20,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    placeholderTextColor: '#',
    width: '90%',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  txt: {
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#00FF00',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  tDono: {
    fontSize: 20,
    bottom: 0,
    position: 'fixed',
    margin: 10,
  },
});
