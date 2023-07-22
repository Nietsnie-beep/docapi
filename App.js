import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Qr from './screens/Qr';
import Buscar from './screens/buscar';
import PaymentScreen from './screens/PaymentScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Buscar} options={{ headerShown: false }}/>
        <Tab.Screen name="pago" component={PaymentScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="qr" component={Qr}  options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const StackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="home" component={Buscar} />
    <Stack.Screen name="pago" component={PaymentScreen} />
    <Stack.Screen name="qr" component={Qr} />
    {/* Otras pantallas para la navegación de pila en "Home", "Pago" y "Qr" */}
  </Stack.Navigator>
);