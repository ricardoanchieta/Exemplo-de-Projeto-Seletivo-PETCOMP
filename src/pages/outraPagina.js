import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const outraPagina = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SimpleButton textoPrincipal="abacate" navigation = {() => navigation.navigate("Sobre")}/>
            <SimpleButton textoPrincipal="banana" navigation = {() => navigation.navigate("Monitorias")}/>
            

            {
                //Código antigo e sem uso de componetização. RETRABALHO
                /* <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>Sobre</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>Monitorias</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>Semana do Calouro</Text>
                </TouchableOpacity> */
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor: "#E1E2E1",
    }
})

export default outraPagina;