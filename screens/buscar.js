import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,Text,TouchableOpacity, Image  } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
const Buscar = () => {
    const [demandado, setId] = useState('');
    const [demandante, setId_2] = useState('');
    const [libro, setId_3] = useState('');

    const [data, setData] = useState(null);

    const navigation = useNavigation();
    const handleSearch = () => {
        // Realiza la solicitud a la API con el ID ingresado
        axios.get(`http://192.168.100.76:8000/documento_detail_search/?demandado=${demandado}&demandante=${demandante}`)
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
            <Image source={require('../assets/obediente.png')} style={styles.image} />
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
                color="#3498db"
            >
                <Text style={styles.buttonText}>Buscar</Text>
            {data && (
                <View>
                    <Text >{data.name}</Text>
                    <Text>{data.description}</Text>
                </View>
            )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    input: {
       backgroundColor: 'white',
        width:'100%',
        borderColor: '#e8e8e8',

        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
        padding:10

    },

    buttonContainer: {
        marginVertical: 10,
        backgroundColor: '#7940D2',
        borderRadius: 8,
        width:'90%',
        height:50,
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center',
        marginTop:30
    },

    image:{
        width:190,
        height: 190,
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center',
        marginBottom:15,
    },
});

export default Buscar;