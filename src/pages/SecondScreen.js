import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, AsyncStorage } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class SecondScreen extends React.Component {

  state = {
    image: null,
  };

  takeFromCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

     // console.warn(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    }
  }

  takeFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    //console.warn(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      // try {
        //const value = await AsyncStorage.getItem(key, JSON.stringify({image: result.uri}));
      //   if (value !== null) {
      //     // We have data!!
          // console.warn('!!!!!!!!!!!',value);
      //   }
      // } catch (error) {
      //   // Error retrieving data
      // }
    }
  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity style={{ padding: 50 }} onPress={() => this.props.navigation.navigate('FirstScreen')} >
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity onPress={() => Alert.alert('Hello, User', 'Choose your destiny',
          [
            { text: 'Camera', onPress: () => this.takeFromCamera() },
            { text: 'Gallery', onPress: () => this.takeFromGallery() },
          ])
        }>
          <Image
            style={styles.image}
            source={this.state.image ? { uri: this.state.image } :
              { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
  },
  text: {
    padding: 50,
    textAlign: 'center',
  },
  image: {
    borderRadius: 50,
    marginLeft: '40%',
    width: 90,
    height: 90,
  }
})