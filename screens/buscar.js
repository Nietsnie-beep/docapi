import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

const Buscar = () => {
    const [demandado, setId] = useState('');
    const [demandante, setId_2] = useState('');
    const [libro, setId_3] = useState('');
    const [data, setData] = useState(null);
    const navigation = useNavigation();

    const handleSearch = () => {
        axios.get(`http://192.168.100.84:8000/documento_detail_search/?demandado=${demandado}&demandante=${demandante}`)
            .then(response => {
                setData(response.data);

                if (response.data.length === 0) {
                    Alert.alert('Error', 'No se encontró el documento');
                } else {
                    navigation.navigate('pago', {
                        id: response.data[0].id,
                    });
                }
            })
            .catch(error => {
                Alert.alert('Error', 'No se encontró el documento');
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/obediente.png')} style={styles.image} />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el demandado"
                    value={demandado}
                    onChangeText={text => setId(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el demandante"
                    value={demandante}
                    onChangeText={text => setId_2(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el libro"
                    value={libro}
                    onChangeText={text => setId_3(text)}
                />
                <TouchableOpacity
                    title="Buscar"
                    onPress={handleSearch}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
                {data && (
                    <View>
                        <Text>{data.name}</Text>
                        <Text>{data.description}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#621132', // Color de fondo de la caja del formulario
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 30,
        borderColor: '#56242A', // Color del marco de la imagen
        borderWidth: 2,
        borderRadius: 10,
    },
    image: {
        width: 190,
        height: 190,
    },
    formContainer: {
        width: '100%',
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        padding: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        backgroundColor: '#d4c19c', // Color del botón
        borderRadius: 8,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Buscar;