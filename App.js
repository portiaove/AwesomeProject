/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  }
})

class App extends Component {
  render() {
    return(
      <View style={styles.center}>
        <Text style={styles.blue}>Hello World!</Text>
        <Text style={[styles.blue, styles.red]}>Hello World!</Text>
      </View>
    )
  }
}

export default App;
