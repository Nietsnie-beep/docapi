import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    
    // Aquí puedes agregar la lógica de autenticación con el correo y contraseña
    // por ejemplo, utilizando Firebase, AWS Cognito u otro servicio.
    navigation.navigate('Main');
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="#ffffff" // Color de texto de marcador de posición
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholderTextColor="#ffffff" // Color de texto de marcador de posición
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      {/* Medio círculo invertido en la parte inferior */}
      <View style={styles.halfCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e232e', // Color de fondo principal
  },
  background: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Color de fondo semitransparente
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff', // Color del título
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ffffff', // Color del borde de los campos
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff', // Color del texto de entrada
  },
  loginButton: {
    backgroundColor: '#B38E5D', // Color del botón de inicio de sesión
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  halfCircle: {
    width: '100%',
    height: 100,
    backgroundColor: '#9d2449', // Color del medio círculo invertido
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: 'absolute',
    bottom: -50, // Coloca el medio círculo en la parte inferior de la pantalla
  },
});

export default LoginScreen;