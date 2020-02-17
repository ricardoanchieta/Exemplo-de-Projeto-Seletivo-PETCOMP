import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus luctus, malesuada justo non, aliquet velit. Pellentesque nec nisi erat. Morbi ultrices, erat et tincidunt rhoncus, diam orci auctor lectus, at facilisis ex mauris in lectus. Phasellus placerat, velit sit amet tincidunt molestie, elit neque eleifend urna, eget vehicula libero diam vitae mi. Mauris ullamcorper ante vitae bibendum tincidunt. Etiam at metus et nisi gravida luctus vel et arcu. Etiam tempor ullamcorper sapien, non pellentesque odio dignissim sed. Nam nisi ligula, euismod non varius vitae, ornare quis metus.
            
            </Text>
            <Image style={styles.imageStyle} source={require('../../assets/icon.png')}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        marginHorizontal:5,
        justifyContent: "space-between",
        marginBottom:25
    },
    text:{
        fontSize:18,
        textAlign: "justify"
    },
    imageStyle:{
        height:200,
        width:200
    }
})