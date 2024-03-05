import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import Logo from '../../assets/icon/Logo.svg';
 

const SplashScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Logo />
            <Text>SplashScreen</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02CF83',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium', 
    },
});