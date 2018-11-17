import React from 'react';
import { Text, View, Platform } from 'react-native';
import Landing from './src/Landing';
import Foto from './src/Foto';
import Favorito from './src/Favorito';
import ImagePicker from './src/ImagePicker';


export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  }

  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
 /*  if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "foto"){
        return(
          <Foto switchScreen={this.switchScreen}/>
        )
    } */
    switch(this.state.currentScreen) {
      case "landing":
        return(
          <Landing switchScreen={this.switchScreen}/>
        )
          break;
      case "foto":
        return(
          <Foto switchScreen={this.switchScreen}/>
        )
          break;
      case "favoritos":
        return(
          <Favorito switchScreen={this.switchScreen}/>
        )
          break;
      case "ImagePicker":
        return(
            <ImagePicker switchScreen={this.switchScreen}/>
        )
          break;
      
      default:
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
  }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
    }
  }
