import React, { Component } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { 
  Container, Icon, Card, CardItem, Content, Right, ListItem, Text 
} from 'native-base';

import NewsDetail from './newsDetail';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.news
    };

  }
  _loadNewsEvent(e) { 
    console.log(e);
    Linking.openURL(e[0].url);
  }
  render() {
    return (
      <Container>
        <Content>
          {
            this.state.news.map((l, i) => (
              <TouchableOpacity key={i} onPress={() => { this._loadNewsEvent(l.links) }}>
              <Card>
                <CardItem>
                  <Icon active type="FontAwesome" name="rss" style={{ color: '#FF5722' }} />
                  <Text>{l.title}</Text>
                  <Right>
                    <Icon type="FontAwesome" name="arrow-right" />
                  </Right>
                </CardItem>
              </Card>
              </TouchableOpacity>
            ))
          }
        </Content>
      </Container>
    );
  }
}
