/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is my first Mobile App!</Text>
      <Text style={styles.textStyle}>
        I am building this with React Native!
      </Text>
      <Text style={styles.textStyle}>
        I plan to learn all ReactNative technologies with this project
      </Text>
      <Text style={styles.textStyle}>Let's journey through this together!</Text>
      <Text style={styles.textStyle}>This is my first Mobile App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 32,
  },
  textStyle: {
    height: 100,
    fontSize: 20,
    color: 'blue',
    fontWeight: '500',
  },
});

export default App;
