import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from '@react-navigation/native';

const Qr = () => {
    const route = useRoute();
    var qr = route.params.response.qr_code;
    qr = "http://192.168.100.84:8000/" + qr;
    console.log(qr);

    return (
        <View style={styles.container}>
            <View style={styles.qrContainer}>
                <View style={styles.qrFrame}>
                    <Image source={{ uri: qr }} style={styles.imagen} />
                </View>
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
        backgroundColor: '#621132', // Fondo de toda la pantalla
    },
    qrContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrFrame: {
        borderColor: '#b38e5d', // Color del marco del QR
        borderWidth: 10,
        borderRadius: 10,
        padding: 10,
    },
    imagen: {
        width: 300,
        height: 300,
    },
});