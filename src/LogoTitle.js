import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Header
        // leftComponent={{ icon: 'cash', color: '#fff' }}
        centerComponent={{ text: 'Câmbio App', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
      />
    );
  }
}