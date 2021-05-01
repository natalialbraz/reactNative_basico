import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Imagem extends Component{
  render(){
    let imagem = {
      uri: 'https://alunos.phpdozeroaoprofissional.com.br/' +this.props.nome+ '.jpg'
    }
    return (
        <Image source={imagem} style={{width: parseInt(this.props.largura), height: parseInt(this.props.altura)}} />
    )
  }
}
export default class primeiroApp extends Component{
  render(){
    return(
      <View>
      <Text>Olá Mundo</Text>
      <Text style={{fontSize:25, color:'red', margin:20}}>primeiros textos</Text>
      </View>

      <Imagem nome='albert' largura='250' altura='250' />

    );
  }
}