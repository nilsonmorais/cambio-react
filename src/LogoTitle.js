import React, { Component } from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/res/mipmap-mdpi/ic_launcher.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}