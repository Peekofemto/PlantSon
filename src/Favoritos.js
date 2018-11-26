import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { Header, Item, Left, Container, Body, Title, Right, Icon, Input, Button} from 'native-base';

var myBackground = require('../assets/PantallaFoto.jpg')

class Favoritos extends React.Component{
    render(){
        return(
            <View>
                <ImageBackground source={myBackground} style={styles.backgroundStyle}>
                    <View style={styles.viewStyles}>
                        <Header style = {styles.headerStyle}>
                            <Left>
                                <Button transparent
                                onPress = {()=>this.props.switchScreen("foto")}
                                >
                                <Icon name='arrow-back' />
                                </Button>
                            </Left>
                        </Header>
                        <Text style={styles.titleStyle}>Proximamente aquí estarán tus plantas guardadas!</Text>
                    </View>
                </ImageBackground>              
            </View>
        )
    }
}

const styles = {
    backgroundStyle: {
      width: "100%",
      height: "100%"
    },
    viewStyles: {
        flex: 1
    },
    viewHorizontalStyle: {
        flexDirection: 'row'
    },
    headerStyle: {
        backgroundColor: 'orange'
    },
    titleStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#FFF3E0',
        fontWeight: 'bold'
    },
    buttonStyle: {
      margin: 10,
      backgroundColor: 'orange'
    },
    buttonText: {
        color: '#FFF3E0'
    }, 
    iconStyle: {
        color: '#FFF3E0'
    }
  }

export default Favoritos;