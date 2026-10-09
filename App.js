import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './Screeens/Inicio';
import Catalogo from './Screeens/Catalago';
import Detalhes from './Screeens/Detalhes';
import Cadastrar from './Screeens/Cadastrar';
import Editar from './Screeens/Editar'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Catalogo" component={Catalogo} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Editar" component={Editar} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}