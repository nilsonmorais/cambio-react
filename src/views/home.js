import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, List, ListItem } from 'react-native-elements';

import LogoTitle from '../LogoTitle';

const list = [
  {
    title: 'Login',
    icon: 'vpn-key',
    nav: 'Login',
  },
  {
    title: 'Conversão de Moeda',
    icon: 'sync',
    nav: 'Convert',
  },
  {
    title: 'Notícias',
    icon: 'newspaper',
    nav: 'News',
  },
  {
    title: 'Ajuda',
    icon: 'help',
    nav: 'Help',
  },
];

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Página Inicial',
    header: <LogoTitle />,
  };
  render() {
    return (
      <View style={styles.container}>
        <List>
          {list.map(item => (
            <ListItem
              key={item.title}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={() => this.props.navigation.navigate(item.nav)}
            />
          ))}
        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
