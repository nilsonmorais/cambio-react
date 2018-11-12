import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { Text, Header, Button } from 'react-native-elements';

//Views
import LoginScreen from './src/views/login';
import HomeScreen from './src/views/home';
import ConvertScreen from './src/views/convert';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Convert:{ 
      screen: ConvertScreen
    },
    Login:{ 
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    },
    
  },
  
);

export default class AppContainer extends React.Component {
  render() {
    return <RootStack />;
  }
}