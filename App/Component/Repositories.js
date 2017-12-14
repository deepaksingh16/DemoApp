import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, FlatList } from "react-native";
import Badge from "./Badge"
import Seperator from "./Seperator"

class Repositories extends Component {

  render() {
    const {state} = this.props.navigation
    const repos = state.params.repos
    console.log("Data", repos)
    const list = repos.map((item, index) =>{
      const desc = repos[index].description ? <Text style={styles.description}>{repos[index].description}</Text> : <View/>
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight underlayColor='transparent'>
            <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Seperator/>
        </View>
      )
    }) 
    return (
      <ScrollView style={styles.container}>
        <Badge user={state.params} />
        {list}
        {/* <FlatList
          data={list}
          renderItem={({item}) => <Text>{item.full_name}</Text>}
        /> */}

      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default Repositories;