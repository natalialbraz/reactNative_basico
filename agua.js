import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet, ImageBackground, Button} from 'react-native';

export default class contador extends Component{
    
    constructor(props){
        super(props);
        this.state = {consumido:0, status:'Ruim', pct:'0'};

        this.addCopo = this.addCopo.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }

    atualizar(){
        let s = this.state;
        s.pct = ((s.consumido)/2000)*100);
        if(s.pct >= 100){
            s.status = 'Bom';
        }else{
            s.staus  ='Ruim';
        }
        s.pct += '%';
       this.setState(s);
    }

    addCopo(){
        let s = this.state;
        s.consumido += 200;
        this.setState(s);

        this.atualizar();
    }

    render(){
        return(

            <View style={StyleSheet.body}>
                <ImageBackground source = {require('.images/waterbg.png')} 
                style = {styles.bgimage}>

                    <View>
                        <View style = {styles.infoArea}>
                            <View style = {styles.area}>
                                <Text style = {styles.areaTitulo}>Meta</Text>
                                <Text style = {styles.areaDado}>2000ml</Text>
                            </View>
                            <View style = {styles.area}>
                                <Text style = {styles.areaTitulo}>Consumido</Text>
                                <Text style={styles.areaDado}>{this.state.consumido}</Text>
                            </View>
                            <View style = {styles.area}>
                                <Text style = {styles.areaTitulo}>Status</Text>
                                <Text style = {styles.areaDado}>{this.state.status}</Text>
                            </View>                  
                        </View>

                        <View style = {styles.pctArea}>
                            <Text style = {styles.pctTexto}>{this.state.pct}%</Text>
                        </View>

                        <View style = {styles.btnArea}>
                            <Button title="Beber 200ml" onPress={this.addCopo}></Button>
                        </View>
                    </View>

                </ImageBackground>
                
            </View>
        )
    }
}

//estilos
const styles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:20
    },
    bgimage:{
        flex:1, 
        width:null
    },
    infoArea:{
        flex:1, 
        flexDirection:'row',
        marginTop:70
    },
    area:{
        flex:1,
        alignItems:'center'
    }, 
    areaTitulo:{
        color:'#45b2fc'
    },
    areaDado:{
        color:'#2b4274',
        fontSize:15,
        fontWeight:'bold'
    }, 
    pctArea:{
        marginTop:180,
        alignItems:'center'
    },
    pctTexto:{
        fontSize:70, 
        color:'#FFFFFF', 
        backgroundColor:'transparent'
    },
    btnArea:{
        marginTop:30, 
        alignItems:'center'
    }
});