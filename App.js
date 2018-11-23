import React from 'react';
import Expo from 'expo';

//Views
import HomeScreen from './src/views/home';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };
  }
  componentWillMount(){
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });

  }
  render() {
    if (this.state.isReady) {
      return <HomeScreen />;
    } else {
      return <Expo.AppLoading />;
    }
  }
}