import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Qr from './screens/Qr';
import Buscar from './screens/buscar';
import PaymentScreen from './screens/PaymentScreen';

<<<<<<< HEAD
import Buscar from "./screens/buscar";
import MyDocuments from "./screens/MyDocuments";

=======
const Tab = createBottomTabNavigator();
>>>>>>> a56475646dba2adfa1dba64d742274ae7df05a81
const Stack = createStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD

      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Buscar} />
            <Stack.Screen name="MyDocuments" component={MyDocuments} />
          <Stack.Screen name="pago" component={PaymentScreen} />
          <Stack.Screen name="qr" component={Qr} />
        </Stack.Navigator>
      </NavigationContainer>

=======
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Buscar} options={{ headerShown: false }}/>
        <Tab.Screen name="pago" component={PaymentScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="qr" component={Qr}  options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
>>>>>>> a56475646dba2adfa1dba64d742274ae7df05a81
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