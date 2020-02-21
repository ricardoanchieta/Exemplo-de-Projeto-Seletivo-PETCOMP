import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import MonitoriaInformation from '../components/MonitoriaInformation'

export default () => {
    monitorias = [
        {
            id:1,
            headerText: "Algoritmos I",
            contentText: "Disciplina de Algoritmos I: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus luctus, malesuada justo non, aliquet velit. Pellentesque nec nisi erat."

        },
        {
            id:2,
            headerText: "Linguagem de Programação I",
            contentText: "Disciplina de Linguagem de Programação I: Morbi ultrices, erat et tincidunt rhoncus, diam orci auctor lectus, at facilisis ex mauris in lectus. Phasellus placerat, velit sit amet tincidunt molestie, elit neque eleifend urna, eget vehicula libero diam vitae mi."
        },
        {
            id:3,
            headerText: "Cálculo I",
            contentText: "Disciplina de Cálculo I: Mauris ullamcorper ante vitae bibendum tincidunt. Etiam at metus et nisi gravida luctus vel et arcu."
        }
    ]
    return(
        <View style={{flex:1}}>
            <FlatList
                data = {monitorias}
                keyExtractor={monitoria => monitoria.id}
                renderItem={({item}) => {
                    return(
                        <MonitoriaInformation
                            headerText={item.headerText}
                            contentText={item.contentText}
                        />
                    )
                }}
            />
        </View>
    )
}