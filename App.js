/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=100");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
            <Text>
              {`${item.name.first} ${item.name.last}`}
            </Text>}
        />
      </View>
    );
  }
}

