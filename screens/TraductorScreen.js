//Liam Jimenez 2022-0818

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TraductorScreen = () => {
  const [number, setNumber] = useState('');
  const [translation, setTranslation] = useState('');

  const numeroALetras = (numero) => {
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

    if (numero < 10) {
      return unidades[numero];
    } else if (numero < 20) {
      return especiales[numero - 10];
    } else if (numero < 100) {
      const unidad = numero % 10;
      const decena = Math.floor(numero / 10);
      if (unidad === 0) {
        return decenas[decena];
      } else {
        return decenas[decena] + ' y ' + unidades[unidad];
      }
    } else if (numero < 1000) {
      const centena = Math.floor(numero / 100);
      const resto = numero % 100;
      if (resto === 0) {
        return unidades[centena] + 'cientos';
      } else {
        return unidades[centena] + 'cientos ' + numeroALetras(resto);
      }
    } else {
      return 'mil';
    }
  };

  const handleTranslate = () => {
    const num = parseInt(number, 10);
    if (!isNaN(num) && num >= 1 && num <= 1000) {
      const translatedNumber = numeroALetras(num);
      setTranslation(translatedNumber);
    } else {
      setTranslation('Por favor, ingresa un número entre 1 y 1000');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNumber(text)}
        value={number}
        placeholder="Ingrese un número (1-1000)"
        keyboardType="numeric"
      />
      <Button title="Traducir" onPress={handleTranslate} />
      <Text style={styles.translation}>{translation}</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  translation: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default TraductorScreen;
