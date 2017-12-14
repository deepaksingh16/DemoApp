import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Seperator extends Component {
  render() {
    return (
      <View style = {styles.separator} />
    );
  }
}

var styles = StyleSheet.create({
    separator: {
      flex: 1,
      backgroundColor: '#E4E4E4',
      height: 1,
      marginLeft: 15
    }
  });

export default Seperator;