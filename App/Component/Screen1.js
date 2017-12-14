import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from "react-native";

class Screen1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      isLoading: false,
      error: false
    }
    getBio = this.getBio.bind(this);
  }

  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`
    return fetch(url).then((res) => res.json())
  }

  handleSubmit() {
    this.setState({
      isLoading: true,
    })
    getBio(this.state.username)
    .then((res) => {
      if (res.message === "Not Found") {
        this.setState({
          error: 'User not found',
          isLoading: false
        });
      } else{
        this.setState({
          username: '',
          isLoading: false,
          error: false
        })
        this.props.navigation.navigate('Dashboard', {
          avatar: res.avatar_url,
          repo: res.repos_url,
          name: res.name,
          login: res.login,
          userInfo: res
        });
      }
    })
  }

    render() {
      const showError = (
        this.state.error ?
          <Text style={styles.errorText}> {this.state.error} </Text> :
          <View></View>
      );
      return (
          <View style={styles.mainContainer}>
          <Text style={styles.title}>Search for Github User</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
          />
          <TouchableHighlight
          style = {styles.button}
          underlayColor='white'
            onPress={this.handleSubmit.bind(this)}>
              <Text style= {styles.buttonText}>Search</Text>
            </TouchableHighlight>
            {showError}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#48BBEC'
  },
  title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
  },
  searchInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
  },
  buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
  },
  button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red'
  }
});

export default Screen1;