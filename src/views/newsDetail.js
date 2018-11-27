import React, { Component } from 'react';
import { 
  Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Icon, Title
} from 'native-base';

class LogoTitle extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          >
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Detalhes</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.news
    };
  }
  componentWillMount(){
    console.log('Before Mount: ' + this.state.news)
  }
  static navigationOptions = {
    title: 'Detalhes',
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
