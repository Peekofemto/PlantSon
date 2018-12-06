import React from 'react';
import { Text, View, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Camera, Permissions, ImageManipulator } from 'expo';
import {Button, List, ListItem} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Clarifai = require('clarifai');

const clarifai = new Clarifai.App({
  apiKey: '9e82500d61c1401cbc10dc078be8d251',
});
process.nextTick = setImmediate;

const styles = StyleSheet.create({
  textStyles: {
    color: 'white',
    fontSize: 20
  },
  textPrediction: {
    color: 'green',
    fontSize: 22
  },
  viewExterior: {  
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      justifyContent: 'center'    
  },
  viewInterior: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {             
    flex: 0.1,
    alignItems: 'center',
    backgroundColor: 'orange',
    flexDirection: 'column',
    width: width  
  },
  text: {
    fontSize: 30, 
    color: 'white'
  }
});

export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    predictions: [],
  };
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  capturePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      return photo.uri;
    }
  };
  resize = async photo => {
    let manipulatedImage = await ImageManipulator.manipulate(
      photo,
      [{ resize: { height: 300, width: 300 } }],
      { base64: true }
    );
    return manipulatedImage.base64;
  };
  predict = async image => {
    let predictions = await clarifai.models.predict(
      Clarifai.GENERAL_MODEL,
      image
    );
    return predictions;
  };
  objectDetection = async () => {
    let photo = await this.capturePhoto();
    let resized = await this.resize(photo);
    let predictions = await this.predict(resized);
    this.setState({ predictions: predictions.outputs[0].data.concepts });
  };

  render() {
    const { hasCameraPermission, predictions } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            type={this.state.type}
          >
            <View
              style={styles.viewExterior}
            >
              <View
                style={styles.viewInterior}
              >
                <List dataArray={predictions.map(prediction => ({
                      key: `${prediction.name} ${prediction.value}`,
                      }))}
                      renderRow={(item) =>
                      <ListItem>
                        <Text style= {styles.textStyles}>{item.key}</Text>
                      </ListItem>
                      }>
                </List>
              </View>
              <Button warning
                style={styles.button}
                onPress={this.objectDetection}
              >
                <Text style={styles.text}>
                  Detectar
                </Text>
              </Button>
            </View>
          </Camera>
        </View>       
      );     
    }
  }
}