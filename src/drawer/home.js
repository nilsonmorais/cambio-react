import Expo from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../views/home';
import LogoTitle from '../LogoTitle';

const HomeDrawerItem = createStackNavigator({
  screen: Home
});

HomeDrawerItem.navigationOptions = {
  drawerLabel: 'Home',
  title: 'Página Inicial',
  headerTitle: <LogoTitle />
};

export default HomeDrawerItem;