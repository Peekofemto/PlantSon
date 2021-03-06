//import stuff
import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import { Header, Item, Left, Container, Body, Title, Right, Icon, Input, Button} from 'native-base';
import Loader from './Loader';
import {ImagePicker, Permissions} from 'expo';


var myBackground = require('../assets/Pantalla2.jpg')


//create stuff
class Foto extends React.Component{
    state = {
        image: null,
        
      };
    pickPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [6, 9],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
    askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // you would probably do something to verify that permissions
        // are actually granted, but I'm skipping that for brevity
    };
    
    render(){
        let { image } = this.state;
        return(
            <View>
                <ImageBackground source = {myBackground} style = {styles.backgroundStyle} imageStyle={styles.imageStyle}>
                    <View style = {styles.viewStyles}>
                        
                        <Header style = {styles.headerStyle}>
                            <Left>
                                <Button transparent
                                onPress = {()=>this.props.switchScreen("landing")}
                                >
                                <Icon name='arrow-back' />
                                </Button>
                            </Left>
                            <Body>
                            <Text style = {styles.titleStyle}>Identifica tu planta</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Icon name='search' />
                                </Button>
                                <Button transparent>
                                <Icon name='heart'
                                    onPress = {()=>this.props.switchScreen("favoritos")}
                                />
                                </Button>
                                <Button transparent>
                                <Icon name='more' />
                                </Button>
                            </Right>
                        </Header>
                        <View style = {styles.viewHorizontalStyle}>
                            <Left>
                            <Button 
                            large
                            block ={true}
                            style = {styles.buttonStyle}
                            onPress = {()=>this.props.switchScreen("camara")}
                            >
                            <Icon name='camera'style={styles.iconStyle} />
                            <Text style={styles.buttonText}>Toma una foto</Text>
                            </Button>
                            </Left>
                            <Right>
                            <Button
                            large
                            block ={true}
                            style = {styles.buttonStyle}
                            onPress = {this.pickPhoto}
                            >
                            <Icon name='image' style={styles.iconStyle} />
                            <Text style={styles.buttonText}>Selecciona de galería</Text>
                            </Button>
                            </Right>
                        </View>
                    </View>       
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: "100%",
        height: "100%",   
      },
      imageStyle: {
          resizeMode: 'stretch'  
      },
      viewStyles: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'      
      },
      viewHorizontalStyle: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
      },
      headerStyle: {
          backgroundColor: 'orange',
          height: 70
      },
      titleStyle: {
          fontFamily: 'Roboto',
          fontSize: 16,
          color: '#FFF3E0',
          fontWeight: 'bold'
      },
      buttonStyle: {
        flexDirection: 'column',
        margin: 5,
        height: 100,
        backgroundColor: 'orange'
      },
      buttonText: {
          color: '#FFF3E0'
      }, 
      iconStyle: {
          color: '#FFF3E0'
      } 
});


//export stuff
export default Foto;