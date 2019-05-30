import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from './Header';

export default class App extends React.Component {

  state= {
    filter: '',
    inputState: styles.input,
  }

   animals = [
     { key: 'cat' }, { key: 'dog' }, { key: 'fox' }, { key: 'bird' }, { key: 'mouse' }, { key: 'wolf' },
   { key: 'rabbit' }, { key: 'hedgehog' }, { key: 'frog' }, { key: 'shark' }, { key: 'tiger' }, { key: 'lion' },
   { key: 'snake' }, { key: 'strige' }, { key: 'owl' }, { key: 'raccoon' }, { key: 'bear' }, { key: 'giraffe' },
  ];

  render() {
    return (
      <>
        <Header />
        <View style={styles.container}>
          <Text style={styles.text}>Hello World!!!</Text>
          <TextInput 
          style={this.state.inputState}
          onChangeText={(filter) => this.setState({filter})}
          placeholder={`Enter the text`}
          onBlur={() => this.setState({inputState: styles.input})}
          onFocus={() => this.setState({inputState: styles.inputFocused})}
          />
          <FlatList
            style={styles.flatList}
            data={this.animals.filter(i => i.key.includes(this.state.filter.toLowerCase()))}
            renderItem={({ item }) => <TouchableOpacity style={styles.button} onPress={() => alert(item.key)}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <Text style={styles.text} >{item.key}</Text>
            </TouchableOpacity>}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#aaa',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,

  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  },
  input: {
    padding: 10,
    marginLeft: '15%',
    borderWidth: 3,
    borderColor: 'grey',
    width: '70%',
  },
  inputFocused: {
    padding: 10,
    marginLeft: '15%',
    borderWidth: 3,
    borderColor: 'blue',
    width: '70%',
  }
});
