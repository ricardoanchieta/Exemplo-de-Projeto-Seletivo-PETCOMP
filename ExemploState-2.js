import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default () => {
  const [timer, setTimer] = useState(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{inputText}</Text>
      <Text style={styles.paragraph}>{timer}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Escreva algo..." 
        value={inputText} 
        onChangeText={text => setInputText(text)}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  bigText:{
    fontSize:32,
    fontWeight:"bold"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    fontSize:18,
    borderBottomWidth:1,
    borderBottomColor:"black"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
