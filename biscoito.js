import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class Botao extends Component { 
    {/*pode ser usado em outras aplicações pois é um componente único. Por isso, devemos criar estilos para ele também unicos*/}
    constructor(props){
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao:{
                width:250,
                height:50,
                borderWidth:2,
                borderColor: props.color,
                backgroundColor:'transparent',
                borderRadius:25
            }, 
            botaoArea:{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'center'
            }, 
            botaoText:{
                color: props.color, 
                fontSize:14,
                fontWeight:'bold'
            }
        });
    }
    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}> {/*é um botao, dentro dele colocamos o View*/}
                <View style={this.styles.botaoArea}>
                    <Text style={this.styles.botaoText}>{this.props.text}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

export default class biscoitoSorte extends Component{

    constructor(props){
        super(props);
        this.state = {texto:};

        this.frases = ["A vida trará coisas boas se tiver paciência.", 
        "Defeitos e virtudes são apenas dois lados da mesma moeda.",
        "Não há que ser forte. Há que ser flexível.",
        "A juventude não é uma época da vida, é um estado de espírito.",
        "Siga os bons e aprenda com eles.", 
        "São os nossos amigos que nos ensinam as mais valiosas lições.",
        "Aquele que se importa com o sentimento dos outros, não é um tolo.",
        "A maior barreira para o sucesso é o medo do fracasso.",
        "Nós somos o que pensamos.",
        "O nosso primeiro e último amor é… o amor-próprio."
        ];

        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito(){
        let s = this.state;
        let r = Math.floor(Math.random() * this.frases.length);


        s.texto = this.frases[r];
        this.setState(s);
       }

    quebrarBiscoito() {
        alert("Frase qualquer...");
    }
    render(){
        return(
            <View style={styles.body}>
                <Image source={require('./images/cookies.png')} />
                <Text style={styles.texto}>"{this.state.texto}"</Text>
                <Botao color='#B59619' text="Quebrar Biscoito" onPress={this.quebrarBiscoito}></Botao>
               
            </View>
        );
    }
}


//estilos
const styles = StyleSheet.create({
    body:{
        paddingTop:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:17,
        color:'#B59619',
        margin:30,
        fontStyle:'italic',
        textAlign: 'center'
    }
});