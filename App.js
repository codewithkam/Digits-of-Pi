import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Home from './Home'

export default class App extends Component {

     

  render() {
    return (
      <Home/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})