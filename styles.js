import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class aprendendo extends Component{
    render(){

        return(
            <View style={{paddingTop:20}}>
                <Text style={styles.azulGrande}>Este é o texto 1</Text>
                <Text style={styles.vermelho}>Este é o texto 2</Text>
                {/* aplicando varios estilos ao mesmo tempo. ele ira juntar as duas propriedades de modo que em caso de conflito, a ultima prevalecerá */}
                <Text style={[styles.azulGrande, styles.vermelho]}>Este é o texto 3</Text>
                <Text style={[styles.vermelho, styles.azulGrande]}>Este é o texto 4</Text>
            </View>

        );
    }
}
// estilos
const styles = StyleSheet.create({
    azulGrande: {
        color:'blue',
        fontSize:30,
        textAlign:'center'
    }
    vermelho: {
        color:'red',
        fontSize:15
    }
});