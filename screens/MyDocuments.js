import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet,Image } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.100.76:8000/resibo'; // Reemplaza esta URL con la URL de tu API
const API_URL_img = 'http://192.168.100.76:8000/';
/*media/qr_codes/2.png*/


const ListItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={{ uri: API_URL_img + item.qr_code }} style={styles.image} />
        {/*<Text>{item.documento}</Text>*/}
    </View>
);
const MyDocuments = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Realiza la solicitud HTTP para obtener los datos de la API
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                setData(result); // Guarda los datos en el estado
                setLoading(false); // Cambia el estado de carga a falso
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={item => item.id.toString()} // Asegúrate de que la clave sea un string
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row', // Alinea la imagen y el texto en fila
        alignItems: 'center', // Alinea los elementos verticalmente en el centro
    },
    image: {
        width: 50, // Ancho deseado de la imagen
        height: 50, // Alto deseado de la imagen
        marginRight: 10, // Espacio entre la imagen y el texto
    },
});
export default MyDocuments;