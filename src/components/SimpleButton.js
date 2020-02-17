import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SimpleButton = ({ textoPrincipal, navigation}) => {
    return(
        <TouchableOpacity style = {styles.buttonContainer} onPress = {navigation}>
                <Text style = {styles.buttonText}>{textoPrincipal}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: "#060e46", 
    },
    buttonText:{
        fontSize: 22,
        color: "#ffffff",
    },
});

export default SimpleButton;