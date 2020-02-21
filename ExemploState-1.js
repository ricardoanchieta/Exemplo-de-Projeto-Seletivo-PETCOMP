import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTimer(timer => timer+1)
        }, 1000)
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                App React Native
            </Text>
            <Text style={styles.bigNumber}>
                {timer}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3f3f3f",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        color: "#bfbfbf"
    },
    bigNumber: {
        fontSize: 32,
        color: "#bfbfbf",
        fontWeight: "bold"
    }
})

export default App;
