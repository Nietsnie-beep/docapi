import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Qr from './screens/Qr';
import Buscar from './screens/buscar';
import PaymentScreen from './screens/PaymentScreen';

import MyDocuments from "./screens/MyDocuments";
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Qr} />
        </Stack.Navigator>
    );
}
const ProfileStack = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Buscar}   />
            <Stack.Screen name="qr" component={Qr}   />
            <Stack.Screen name="pago" component={PaymentScreen}   />
        </Stack.Navigator>
    );
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  >
        <Tab.Screen name="home" component={ProfileStack} options={{ headerShown: false,   tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
            ),}}/>
        <Tab.Screen name="MyDocuments" component={MyDocuments} options={{ headerShown: false }}/>

      </Tab.Navigator>
       {/* <Stack.Navigator>
            <Stack.Screen name="qr" component={Buscar} />
        </Stack.Navigator>*/}
    </NavigationContainer>
  );
}


