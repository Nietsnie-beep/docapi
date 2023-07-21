import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
const CreditCard = ({type, holder, cvc, number, expireYear, expiryMonth}) => {
    return (



       <View style={styles.container}>

           <View style={styles.CardHeader}>

               <View>
                   <MaterialCommunityIcons
                       name = "integrated-circuit-chip"
                       color = {'#eac330'}
                       size={50}
                   />
               </View>
               <View >
                   <Image source={require('../assets/tarjeta.png')} style={styles.image} />
               </View>
           </View>
           <View style={styles.cardCenter}>
               <Text style={styles.cardNumber}> 0000</Text>
               <Text style={styles.cardNumber}> 0000</Text>
               <Text style={styles.cardNumber}> 0000</Text>
               <Text style={styles.cardNumber}> 0000</Text>
           </View>
           <View style={styles.cardFooter}>
               <View style={styles.cardHolder}>
                   <Text style={styles.textMedium}> Nombre </Text>
               </View>
               <View style={styles.cardExpiry}>
                   <Text style={styles.textMedium}> mm/aa </Text>
               </View>
           </View>
       </View>
    );
};

export default CreditCard;

const styles = StyleSheet.create({
    container:{

        width: '80%',
        marginTop:80,
        marginHorizontal : 20,
        height: 200,
        backgroundColor: '#7940D2',
        borderRadius:20,
        alignSelf: 'center'
    },
    CardHeader:{
        paddingHorizontal:10,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",

    },

    image:{
        width:56,
        height: 35
    },

    cardCenter:{
        flexDirection: "row",
        alignItems: 'center',
        alignSelf:"center",
        width: "60%",
        height:"40%"
    },
    cardNumber:{
        flex:1,
        textAlign:'center',
        color: "#FAFAFA",
        fontSize:18,
        fontWeight: 'bold',
        padding: 1
    },
    cardFooter:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    cardHolder:{},
    textMedium:{
        color:'#FAFAFA',
        fontSize:12,
        textTransform: "uppercase",
        padding:15
    },

    title_screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color:'#0575ec'

    },
})
















