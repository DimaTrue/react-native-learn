import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from './Header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <View style={styles.container}>
          <Text style={styles.text}>Hello World!!!</Text>
          <FlatList
            style={styles.flatList}
            data={[{ key: 'Cat' }, { key: 'Dog' }, { key: 'Fox' }]}
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
    //alignItems: 'center',
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
    textAlign: 'center',
    padding: 10
  }
});
