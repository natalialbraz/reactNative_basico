import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert, TextInput} from 'react-native';

export default class botoes extends Component{

    constructor(props) {
        super(props);
        this.state = {inputTexto: '', texto:''};

        this.apertouBotao = this.apertouBotao.bind(this);

        }
    }

    apertouBotao(){
        let s = this.state;
        s.texto = 'Ola, ' +s.inputTexto;
        this.setState(s);
    }
    render(){
        return(
            <View style={{paddingTop:30}}>
                <TextInput style={StyleSheet.input} placeholder='Qual o seu nome?' onChangeText={(inputTexto) => this.setState({inputTexto})} />
                <Button title='Aperte em mim' onPress={this.apertouBotao}></Button>

                <Text style={styles.texto}>{this.state.texto}</Text>

            </View>
        );
    }
}

// estilos
const styles = StyleSheet.create({
    input:{
        height:40,
        borderWidth:1,
        borderColor:black,
        marign:10,
        padding:10
    }
    texto:{
        fontSize:20, 
        textAlign:'center'
    }
});