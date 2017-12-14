import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Badge from "./Badge"
import Seperator from "./Seperator"

class Profile extends Component {
  getRowTitle(item) {
    var item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    const {state} = this.props.navigation
    var userInfo = state.params.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email',
    'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
    if(!userInfo[item]) {
      return <View key={index} />
    } else {
      return (
        <View key={index} style={styles.container}>
          <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
          <Text style={styles.rowContent}> {userInfo[item]} </Text>
          </View>
          <Seperator/>
        </View>
      )
    }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge user={state.params} />
        {list}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

export default Profile;