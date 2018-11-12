import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';

import LogoTitle from '../LogoTitle';

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Página Inicial',
    headerTitle: <LogoTitle />
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text>Home Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Convert"
          onPress={() => this.props.navigation.navigate('Convert')}
        />
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