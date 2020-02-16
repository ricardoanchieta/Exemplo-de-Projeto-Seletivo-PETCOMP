import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Homepage = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.mainText}>
                Minha Homepage
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 22
    }
})

export default Homepage;