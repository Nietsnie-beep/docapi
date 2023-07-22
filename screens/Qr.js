import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from "react-native";
import CreditCard from "./CreditCard";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

const Qr = () => {

    const route = useRoute();
    var qr = route.params.response.qr_code;
    qr = "http://192.168.100.76:8000/" + qr
    console.log(qr)


    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title_screen}>Qr</Text>
          </View>
          <View style={styles.qrContainer}>
            <Image source={{ uri: qr }} style={styles.imagen} />
          </View>
        </View>
      );
};

export default Qr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, // Ajusta esta distancia según tu preferencia
      },
      qrContainer: {
        flex: 2, // Ajusta la proporción según tu preferencia
        justifyContent: 'center',
        alignItems: 'center',
      },
    form: {
        marginTop:20,
        marginHorizontal:20
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        fontWeight: 'bold',

    },

    title: {
        fontWeight: 'bold',

    },

    buttonContainer: {
        position: 'absolute',
        bottom: 10, // Puedes ajustar esta distancia al fondo según tus necesidades
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop:50,
        backgroundColor:'#7940D2'

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignItems: 'center',
        textAlign: 'center',
    },
    centeredText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    title_screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color:'#0575ec'

    },
    imagen: {
        width: 300,
        height: 300,
        borderColor: '#8F6D5A',
        borderWidth: 10
      },
});










