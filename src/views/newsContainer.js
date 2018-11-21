import React, { Component } from 'react';
import { 
  Container, Icon, Card, CardItem, Content, Right, ListItem, Text 
} from 'native-base';


export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.news
    };
  }
  componentWillMount(){
    console.log('Before Mount: ' + this.state.news)

  }
  render() {
    return (
      <Container>
        <Content>
          {
            this.state.news.map((l, i) => (
              <Card key={i}>
                <CardItem>
                  <Icon active name="logo-googleplus" />
                  <Text>{l.title}</Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              </Card>
            ))
          }
        </Content>
      </Container>
    );
  }
}
