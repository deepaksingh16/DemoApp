import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Badge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.user.avatar}} style={styles.image}/>
        <Text style={styles.name}>{this.props.user.name}</Text>
        <Text style={styles.username}>{this.props.user.login}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
      height: 125,
      width: 125,
      borderRadius: 65,
      marginTop: 10,
      alignSelf: 'center'
    },
    name: {
      fontSize: 21,
      color: 'white',
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 5
    },
    username: {
      alignSelf: 'center',
      fontSize: 16,
      color: 'white'
    },
    container: {
      flex: 1,
      backgroundColor: '#48BBEC',
      marginBottom: 20
    }
  })

export default Badge;