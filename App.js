import React from 'react';
import { createStackNavigator } from 'react-navigation';

//Views
import NewsScreen from './src/views/news';
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
    News:{ 
      screen: NewsScreen
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