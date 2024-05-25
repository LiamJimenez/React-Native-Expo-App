//Liam Jimenez 2022-0818

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SumadoraScreen from '../screens/SumadoraScreen';
import TraductorScreen from '../screens/TraductorScreen';
import TablaMultiplicarScreen from '../screens/TablaMultiplicarScreen';
import ExperienciaScreen from '../screens/ExperienciaScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Sumadora" component={SumadoraScreen} />
        <Stack.Screen name="Traductor" component={TraductorScreen} />
        <Stack.Screen name="Tabla de Multiplicar" component={TablaMultiplicarScreen} />
        <Stack.Screen name="Experiencia" component={ExperienciaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

