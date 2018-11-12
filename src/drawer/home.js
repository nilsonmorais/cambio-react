import Expo from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../views/home';

const HomeDrawerItem = createStackNavigator({
  screen: Home
});

HomeDrawerItem.navigationOptions = {
  drawerLabel: 'Home',
  title: "Página Inicial",
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

export default HomeDrawerItem;