import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class teste extends Component{
    render(){
        return(
            //usando o flexDirection podemos organizar a tela em coluna ou linha. Também podemos dizer onde o conteudo vai ser alinhado: sendo flex-start no lado esquedo, flex-end lado direito e center no centro
            // tambem existe o space-between, que é com espaço entre um e outro elemento
            //space-around deixa um espaço igualitario entre todos os lados do elemento
            //para alinhar os elemento tambem em relaçao à direção vertical, usamos a propriedade alignItems que tambem tem as opções flex-start, flex-end, centro e stretch = se estica ate o final da tela, porem nao funciona se o tamanho for fixo
            <View style={{flex:1, flexDirection: 'row', justifyContent:'center'}}>
                <View style={{width:50, height:50, backgroundColor: 'blue'}}></View>
                <View style={{width:50, height:50, backgroundColor: 'red'}}></View>
                <View style={{width:50, height:50, backgroundColor: 'green'}}></View>
            </View>
        );
    }
}