import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class FirstScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>FirstScreen </Text>
        <TouchableOpacity style={{ padding: 50 }} onPress={() => this.props.navigation.navigate('SecondScreen')} >
          <Text>
            Go to SecondScreen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 50,
    textAlign: 'center',
  }
})