import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";

class Dashboard extends Component {

  constructor(props) {
    super(props)
    getRepos = this.getRepos.bind(this)
  }

  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if (btn === 0) {
      obj.backgroundColor = '#48BBEC'
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE'
    } else {
      obj.backgroundColor = '#758BF4'
    }
    return obj
  }

  goToProfile() {
    this.props.navigation.navigate('Profile', {
      avatar: this.props.navigation.state.params.avatar,
      repo: this.props.navigation.state.params.repo,
      name: this.props.navigation.state.params.name,
      login: this.props.navigation.state.params.login,
      userInfo: this.props.navigation.state.params.userInfo
    });
  }

  goToRepos(username) {
    getRepos(username).then((res) => {
      this.props.navigation.navigate('Repositories', {
        avatar: this.props.navigation.state.params.avatar,
        repo: this.props.navigation.state.params.repo,
        name: this.props.navigation.state.params.name,
        login: this.props.navigation.state.params.login,
        repos: res
      });
    })
  }

  goToNotes() {

  }

  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`
    return fetch(url).then((res) => {
      return res.json()
    })
  }

  render() {
      const {state} = this.props.navigation
    return (
        <View style={styles.container}>
          <Image source={{uri: state.params.avatar}} style= {styles.image}/>
          <TouchableHighlight underlayColor="#88D4F5"
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}>
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#88D4F5"
            style={this.makeBackground(1)}
            onPress={this.goToRepos.bind(this, state.params.login)}>
            <Text style={styles.buttonText}>View Repos</Text>
          </TouchableHighlight>
          {/* <TouchableHighlight underlayColor="#88D4F5"
            style={this.makeBackground(2)}
            onPress={this.goToNotes()}>
            <Text style={styles.buttonText}>View Notes</Text>
          </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    flex: 1
  }
})

export default Dashboard;