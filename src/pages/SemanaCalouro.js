import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
            Cras pharetra lectus eu libero ullamcorper porttitor. Cras sodales diam vel laoreet tincidunt. Maecenas id venenatis justo. Duis lobortis facilisis dolor, vitae cursus purus rhoncus at. Sed ut ligula erat. Curabitur laoreet nec erat quis dapibus. In lobortis tempus convallis. Suspendisse potenti. Donec ligula ex, feugiat vel pellentesque ac, egestas at risus. Curabitur ut varius nulla, sit amet lobortis dui. Proin facilisis mi vel dolor laoreet faucibus. Ut aliquet sapien urna, quis tincidunt mauris auctor ac. Sed at sollicitudin eros. Aenean faucibus scelerisque leo, sit amet fermentum purus feugiat laoreet. Nullam vitae massa nibh. Nulla lobortis, massa in maximus tempus, ipsum justo imperdiet quam, at vehicula dui erat vulputate leo.
            </Text>
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
})