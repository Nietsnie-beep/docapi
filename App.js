import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/*import HomeScreen from "./screens/HomeScreen";*/
import CreditCard from "./screens/CreditCard";
import PaymentScreen from "./screens/PaymentScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Buscar from "./screens/buscar";

const Stack = createStackNavigator();
export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Buscar} />
          <Stack.Screen name="pago" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
