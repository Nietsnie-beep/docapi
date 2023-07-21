import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,Text  } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
const Buscar = () => {
    const [demandado, setId] = useState('');
    const [demandante, setId_2] = useState('');

    const [data, setData] = useState(null);

    const navigation = useNavigation();
    const handleSearch = () => {
        // Realiza la solicitud a la API con el ID ingresado
        axios.get(`http://192.168.100.84:8000/documento_detail_search/?demandado=${demandado}&demandante=${demandante}`)
            .then(response => {
                // Actualiza el estado con los datos de la API
                setData(response.data);

                console.log(response.data, response.data[0].id)
                if (response.data.length == 0){
                    Alert.alert('Error', 'No se encontro el documento');
                }

                if (response.data.length != 0){
                    navigation.navigate('pago', {
                        id: response.data[0].id, 
                    });
                }
            })
            .catch(error => {
                Alert.alert('Error', 'No se pudo obtener los datos de la API');
                console.error(error);
            });

    };

    const handleNavigate = () => {
        navigation.navigate('pago');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el ID a buscar"
                value={demandado}
                onChangeText={text => setId(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese el ID a buscar"
                value={demandante}
                onChangeText={text => setId_2(text)}
            />
            <Button title="Buscar" onPress={handleSearch} />
            {data && (
                <View>
                    <Text>{data.name}</Text>
                    <Text>{data.description}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default Buscar;