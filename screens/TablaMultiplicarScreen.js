//Liam Jimenez 2022-0818

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TablaMultiplicarScreen = () => {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const calcularTabla = () => {
    const num = parseInt(numero);
    const resultados = [];
    for (let i = 1; i <= 13; i++) {
      resultados.push(`${num} x ${i} = ${num * i}`);
    }
    setTabla(resultados);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Calcular" onPress={calcularTabla} />
      {tabla.map((linea, index) => (
        <Text key={index}>{linea}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default TablaMultiplicarScreen;
