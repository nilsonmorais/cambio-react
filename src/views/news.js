import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Expo from 'expo';

import NewsContainer from './newsContainer';
import * as rssParser from 'react-native-rss-parser';

export default class NewsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      news: null
    };
  }
  async loadNews(){
    await fetch('https://www.infomoney.com.br/ultimas-noticias/rss')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        console.log(rss.title);
        console.log(rss.items.length);
        this.setState({ news: rss.items });
      });
      this.setState({ isReady: true });
  }
  componentWillMount() {
    this.loadNews();
  }
  render() {
    if (this.state.isReady) {
      return <NewsContainer news={this.state.news} />;
    } else {
      return <Expo.AppLoading />;
    }
  }
}
