import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class aula3 extends Component{

    constructor(props){
        super(props);
        this.state = {
            listData:[
                {title:'B', data:[
                    {key:'1', nome:'Natália', idade:21}
                ]},
                {title:'C', data:[
                    {key:'2', nome:'Ana', idade:23},
                    {key:'3', nome:'Rosa', idade:61},
                    {key:'4', nome:'Orlando', idade:59}
                ]},
                {title:'D', data:[
                    {key:'5', nome:'Maura', idade:57},
                    {key:'6', nome:'Lindalva', idade:55},
                    {key:'7', nome:'Lindomar', idade:53}
                ]}
            ]
        };
    }

    listSectionRender(section){
        return (
            <Text style={styles.section}> Letra {section.title}</Text>
        );

    }
    listRender(item){
        return(
            <Text style={styles.item}>{item.nome} = {item.idade} anos</Text>
        );
    }

    render(){
        return(
            <View style = {styles.body}>
                <SectionList sections={this.state.listData} renderItem={(item) => this.listRender(item)} renderSectionHeader={({section}) => this.listSectionRender(section)} />
            </View>

        );
    }
}

//estilos
const styles = StyleSheet.create({
    body:{
        paddingTop:20,
        flex:1
    },
    item:{
        fontSize:18,
        height:40,
        padding:10
    },
    section:{
        fontSize:14,
        backgroundColor:'#CCCCCC',
        padding:10

    }
});