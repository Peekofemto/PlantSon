//import stuff
import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import {Header, CardItem,Card, Left, Container, Body, Title, Right, Icon, Thumbnail, Button, Content} from 'native-base';


var myBackground = require('../assets/Pantalla3.jpg');
var plantIcon = require('../assets/Plantas/biznaga.jpg');
var thumb = require('../assets/Plantas/biznaga2.jpg');

class Favorito extends React.Component{
    render(){
        return(
            <View>
                <ImageBackground source = {myBackground} style = {styles.backgroundStyle} imageStyle={styles.imageStyle}>
                    <View style = {styles.viewStyles}>
                        <Header style = {styles.headerStyle}>
                            <Left>
                                <Button transparent
                                onPress = {()=>this.props.switchScreen("foto")}
                                >
                                <Icon name='arrow-back' style={{fontSize: 32}}/>
                                </Button>
                            </Left>
                        </Header>
                <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                    <Left>
                        <Thumbnail source={plantIcon} />
                        <Body>
                        <Text>Biznaga</Text>
                        <Text note>Octubre 31, 2018</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Image source={thumb} style={{height: 200, width: 200, flex: 1}}/>
                        <Text>
                        Planta cactácea de tallo corto y cilíndrico, con espinas grandes y firmes, usadas antiguamente por los aztecas para los actos rituales del sacrificio; del tallo descortezado y confitado se obtiene el acitrón.
                        </Text>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: 'red'}}>
                        <Icon name="heart" style={styles.iconStyle} />
                        <Text>1,926 favs</Text>
                        </Button>
                    </Left>
                    </CardItem>
                </Card>
                </Content>
                    </View>
                </ImageBackground>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: "100%",
        height: "100%"
      },
      imageStyle: {
          resizeMode: 'stretch'  
      },
      viewStyles: {
          flex: 1,
          flexDirection: 'column' 
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
          color: 'red'
      }
});

  export default Favorito;