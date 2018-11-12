import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Página Inicial',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
HomeScreen.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});