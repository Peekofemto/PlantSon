//import stuff
import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/landing.jpg');

class landing extends React.Component{
    render(){
        return(
            <View>
                <ImageBackground source = {myBackground} style = {styles.backgroundStyle}>
                    <View style = {styles.viewStyles}>
                        <Text 
                        style = {styles.titleStyle}
                        >Bienvenido</Text>
                        <Button rounded warning
                        block ={true}
                        style = {styles.buttonStyle}
                        onPress = {()=>this.props.switchScreen("foto")}
                        >
                        <Text style={styles.buttonText}>Empieza a buscar!</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  viewStyles:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundStyle: {
    width: "100%",
    height: "100%"
  },
  titleStyle: {
    fontSize: 30,
    color: 'white',
    alignItems: 'center'
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: 'orange',
    height: 60
  },
  buttonText:{
    color: 'white'
  }
});


export default landing;