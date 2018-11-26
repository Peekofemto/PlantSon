import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

  class ImagePickerScreen extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          style={styles.buttonStyle}
          title="Escoge una foto de tu galería"
          onPress={this.pickPhoto}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          <Button
          style={styles.buttonStyle}
          title="Toma una foto"
          onPress={this.takeAndUploadPhotoAsync}
        />
      </View>
    );
  }

  pickPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
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

    takeAndUploadPhotoAsync= async () => {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [6, 9],
    });
  
    if (result.cancelled) {
      return;
    }
  
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
} 
}
const styles = {
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
  }

  export default ImagePickerScreen;