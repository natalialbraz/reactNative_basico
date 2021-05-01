import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

export default class aulas extends Component{

    constructor(props){
        super(props);
        this.state = {texto:''};
        this.mudarTexto = this.mudarTexto.bind(this);
    }

    mudarTexto(t){
        let s = this.state;
        if(t.length > 0){
            s.texto = 'Olá, '+t;
        }else {
            s.texto = '';
        }
        this.setState(s);
    }
    render(){
        return(
            //queremos receber dados digitados pelo usuario, utilizaremos o TextInput
            <View style={{paddingTop:30}}>
                <TextInput style={styles.input} placeholder='Qual seu nome?' onChangeText={this.mudarTexto}/>
                <Tetx style={styles.texto}>{this.state.texto} </Tetx>
            </View>
        );
    }
}

// estilos
const styles = StyleSheet.create({
    input:{
        height:40,
        borderWidth:1,
        borderColor:'black',
        margin:10,
        padding:10
    }
    texto:{
        fontSize:20,
        textAlign: 'center'
    }

});