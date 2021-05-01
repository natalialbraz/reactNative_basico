import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Janta extends Component {
    constructor(props){
        super(props);
        this.state = {comida: ''};
        var comidas = ['Pizza', 'Lasanha', 'Feijão', 'Salada', 'Sopa']; 

        setInterval(() => {
            this.setState(previousState => {
                var n = Math.floor(Math.random() * comidas.length);
                
                return {comida : comidas[n] };
            });
        }, 1000);
    }
    render(){
        return (
            <View>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'red'}}>Hoje você vai jantar:</Text>
                <Text style={{textAlign:'center', fontSize:20}}>{this.state.comida}</Text>
            </View>

        );
    }
}
export default class projeto extends Component{
    render(){

        return (

            <View style={{paddingTop:20}}>
                <Janta/>

            </View>
        );
    }
}