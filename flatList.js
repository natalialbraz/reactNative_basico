import React, {Component} from 'react';
import {View, Image, StyleSheet, FlatList, Text} from 'react-native';

export default class aula2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            flatData:[
                {nome:'Natália', idade:20, key:'1'},
                {nome:'Paulo', idade:90}, key:'2',
                {nome:'Camila', idade:30, key:'3'},
                {nome:'Julia', idade:25, key:'4'}
            ]
        };
    }
    flatRender(item){
        return(
            <Text style={styles.flatItem}>{item.nome}, {item.idade} anos</Text>

        );
    }

    render(){
        return(

            <View style={styles.body}>
                {/* é uma listagem parecida com o scrollView visto anteriormente, mas é uma listagem ordenada que só carrega na memoria os itens que estao a vista. Isso é perfeito para listas muito grandes
                Possui dois parametros: 
                em data colocamos todas as informações, todos os itens que podem ser exibidos 
                renderItem será executado quantas vezes for necessário para que apareçam todos os itens*/}
                <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({item}) => this.state.flatRender(item)}></FlatList>

            </View>

        );
    }
}

//estilos
const styles = StyleSheet.create({
    body:{
        paddingTop:20
    },
    flatItem:{
        fontSize:18,
        height:40, 
        padding:10
    },
    flatList:{
        backgroundColor:'pink',
        height:80
    }
});