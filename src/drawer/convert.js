import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Convert from '../views/convert';

const ConvertDrawerItem = createStackNavigator({
  screen: Convert
});

ConvertDrawerItem.navigationOptions = {
  drawerLabel: 'Conversão',
  title: "Conversão de Moedas",
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="Convert"
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

export default ConvertDrawerItem;