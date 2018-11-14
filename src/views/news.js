import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-elements';

import LogoTitle from '../LogoTitle';

const list = [
  {
    title: 'Últimas Notícias',
    background: require('../../assets/bg3.png'),
    button: 'Abrir',
    screen: 'News'
  },
  {
    title: 'Conversão de Moeda',
    background: require('../../assets/bg1.png'),
    button: 'Converter',
    screen: 'Convert'
  },
]

export default class NewsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Página Inicial',
    header: <LogoTitle />
  }
  render() {
    return (
      <View style={ styles.container }>
      <Text>News</Text>
      {
        list.map((l, i) => (
          <Card
            key={i}
            title={l.title}
            image={l.background}
            >
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            onPress={() => this.props.navigation.navigate(l.screen)}
            title={l.button} />
          </Card>
        ))
      }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});