import React from 'react';
import {BlurView} from "expo-blur";
import Ionicons from '@expo/vector-icons/Ionicons';
import {SafeAreaView, ScrollView, View} from "react-native";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={{padding: 20}} >
                    <View>
                        <BlurView
                        style = {{
                            marginTop:10,
                            width: 30,
                            height: 30,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Ionicons
                            name = "menu"
                            size ={10}
                            />
                        </BlurView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;