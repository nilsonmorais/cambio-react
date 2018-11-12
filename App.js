import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { Text, Header, Button } from 'react-native-elements';

//Views
import LoginDrawer from './src/drawer/login';
import HomeDrawer from './src/drawer/home';
import ConvertDrawer from './src/drawer/convert';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MainRoot = createStackNavigator(
  {
    Home: HomeDrawer,
    Convert: ConvertDrawer,
    Login: LoginDrawer
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'indigo',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    },
    
  },
  
);

export default class AppContainer extends React.Component {
  render() {
    return <MainRoot />;
  }
}

Expo.registerRootComponent(AppContainer);
