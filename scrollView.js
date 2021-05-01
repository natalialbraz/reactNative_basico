import React, {Component} from 'ract';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

export default class aulas extends Component{

    render() {
        return (
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.quadrado1}></View >
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                </ScrollView> {/*esse scroll é bem fluido.
                existe um chamado de Paging que ao rolar, muda a pagina por inteiro
                Para usa-lo fazemos: */}

                <ScrollView pagingEnabled={true}>
                    <View style={styles.quadrado1}></View >
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                </ScrollView>

            {/*tambem é possivel nao aplicar o scrollview à tela inteira, fixando uma parte dela. Para isso é so criar uma View externa*/}

    

            </View>

        );
    }
}


// estilos
const styles = StyleSheet.create({
    body:{
        paddingTop:20
    },
    quadado1:{
        backgroundColor:'#FF0000',
        height:200
    },
    quadrado2:{
        backgroundColor:'#00FF00',
        height:300
    }
});