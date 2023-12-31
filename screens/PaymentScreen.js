import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import CreditCard from "./CreditCard";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

const PaymentScreen = () => {

    const route = useRoute();

    const navigation = useNavigation();

    console.log(route.params)

    const handleNavigateToOtraPantalla =async () => {
        const response = await post(route.params.id);
        console.log(route.params.id); // Imprime el mensaje en la consola
        navigation.navigate('qr', {response}); // Navega a la pantalla "OtraPantalla"
    };

    const post = async (selectedIds) => {
        try{
          const response = await axios.post(`http://192.168.100.84:8000/resibo_create/`, {
            qr_code: "",
            estado: 1,
            documento: selectedIds
          });
          return response.data;
        }catch (error){
          throw error
        }
      }
  


    return (
       <View style={styles.container}>
           <Text style={styles.title_screen}>Pagoad</Text>
           <CreditCard />
           <View style={styles.form}>
               <Text style={styles.title}>Nombre </Text>
               <TextInput style={styles.input} placeholder="Nombre "/>
               <Text style={styles.title} >Numero de la tarjeta</Text>
               <TextInput style={styles.input} placeholder='000 0000 000 000'/>
               <Text style={styles.title}>Fecha de expiracion</Text>
               <TextInput style={styles.input} placeholder="mm/aa"/>
               <TouchableOpacity style={styles.button} onPress={handleNavigateToOtraPantalla}>
                   <Text style={styles.buttonText}>Pagar</Text>
               </TouchableOpacity>
           </View>
       </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        width:'100%'
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
});





















