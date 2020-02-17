import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MonitoriaInformation from '../components/MonitoriaInformation'

export default () => {
    return(
        <ScrollView style={{flex:1}}>
            <MonitoriaInformation 
                headerText="Algoritmos I" 
                contentText="Disciplina de Algoritmos I: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus luctus, malesuada justo non, aliquet velit. Pellentesque nec nisi erat. "
            />
            <MonitoriaInformation
                headerText="Linguagem de Programação I" 
                contentText="Disciplina de Linguagem de Programação I: Morbi ultrices, erat et tincidunt rhoncus, diam orci auctor lectus, at facilisis ex mauris in lectus. Phasellus placerat, velit sit amet tincidunt molestie, elit neque eleifend urna, eget vehicula libero diam vitae mi."
            />
            <MonitoriaInformation
                headerText="Cálculo I" 
                contentText="Disciplina de Cálculo I: Mauris ullamcorper ante vitae bibendum tincidunt. Etiam at metus et nisi gravida luctus vel et arcu. "
                />
        </ScrollView>
    )
}