import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native-elements';

//Views
import Login from './src/drawer/login';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: 'red' }}>
    <Text>App</Text>
  </View>
);

const MainRoot = createStackNavigator({
  Login: {
    screen: Login,
    path: '/login'
  },
});

export default class AppContainer extends React.Component {
  render() {
    return (
      <MainRoot />
    );
  }
}

Expo.registerRootComponent(MainRoot);
