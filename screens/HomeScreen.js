import { Button, View, Text } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/Style";

export default class HomeScreen extends Component {
    constructor({ navigation }){
        super();
        this.state = {
            navigation: navigation
        }
    }
    

    render(){
        
        return (
            <View style={styles.container}>
              <Text>Home Screen</Text>
              <Button
                title="mudar para tela 2"
                onPress={ () => this.state.navigation.navigate('Tela2') }
              />
        
            </View>
        );
    }
}