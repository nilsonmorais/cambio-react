import React, { Component } from 'react';
import { 
  Container, Content, Button, Text, Body,  Header, Tab, Tabs, Left, Right, Title
} from 'native-base';

import NewsScreen from './news';
import ConvertScreen from './convert';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
          <Left />
          <Body>
            <Title>CâmbioApp</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Notícias">
            <NewsScreen />
          </Tab>
          <Tab heading="Converter">
            <ConvertScreen />
          </Tab>
      </Tabs>
      </Container>
    );
  }
}
