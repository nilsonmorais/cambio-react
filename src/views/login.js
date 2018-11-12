import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1>Login View</Text>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0.993}
        >
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});