import Expo from 'expo';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import Login from '../views/login';

const LoginDrawerItem = createStackNavigator({
  screen: Login
});

LoginDrawerItem.navigationOptions = {
  drawerLabel: 'Login',
  title: "Login",
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="email"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  )
};

export default LoginDrawerItem;