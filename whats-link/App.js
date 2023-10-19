import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Linking,
  TouchableOpacity,  
  Clipboard,
  ToastAndroid
} from 'react-native';

export default function App() {
  const [num, setNum] = useState('');
  let url = 'https://api.whatsapp.com/send/?phone=%2B55';
  let url2 = '&text&type=phone_number&app_absent=0';

  const gerar = async () => {
    await Linking.openURL(url + num + url2);
  };

  const copiar = () => {
    Clipboard.setString(url + num + url2);
    ToastAndroid.show('Link copiado com sucesso!', ToastAndroid.SHORT);
  }

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
      <TouchableOpacity style={styles.btn2} onPress={copiar}>
        <Text style={styles.txt2}>COPIAR LINK</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20,bottom: 0,margin: 10,position:'absolute'}}>Desenvolvido por PedroTosta</Text>
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
    color: "#FFFFFF",
  },
  txt2: {
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  btn: {
    backgroundColor: '#0cc243',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    margin: 5,
    width: "60%",
    alignItems: 'center',
  },
  btn2:{
    backgroundColor: '#007FFF',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    margin: 5,
    width: "60%",
    alignItems: 'center',
  }
});
