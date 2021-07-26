import { Button, View, Text } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/Style";

export default class Tela2 extends Component {
    constructor({ navigation }){
        super();
        this.state = {
            navigation: navigation
        }
    }
    
    

    render(){
        return (
            <View style={styles.container}>
              <Text>Tela 2 Screen</Text>
              <Button title="back to home" 
              onPress={()=> this.state.navigation.navigate('Home')} />
              
        
            </View>
        );
    }
}