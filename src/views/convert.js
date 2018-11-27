import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem, Text, Body, Item, Button, Picker , Input, Icon
} from 'native-base';
import axios from 'axios';

export default class ConvertScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency1: 'GBP',
      currency2: 'USD',
      rate1: null,
      rate2: null,
      valor1: null,
      valor2: null
    };
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Conversão de Moedas</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item regular>
                  <Input placeholder='Valor a converter' onChangeText={valor1 => this.setState({ valor1 })} />
                </Item>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="Selecione Moeda"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.currency2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="US Dollar" value="USD" />
                    <Picker.Item label="UK Libra" value="GBP" />
                    <Picker.Item label="BR Real" value="BRL" />
                  </Picker>
                </Item>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="Selecione Moeda"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.currency1}
                    onValueChange={this.onValueChange1.bind(this)}
                  >
                    <Picker.Item label="US Dollar" value="USD" />
                    <Picker.Item label="UK Libra" value="GBP" />
                    <Picker.Item label="BR Real" value="BRL" />
                  </Picker>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button block onPress={() => this.getRates()}>
                <Text>Converter</Text>
              </Button>
            </CardItem>
            <CardItem>
              <Text>
                {'\n'}
                {'Valor em '}{this.state.currency2}{': '}
                {this.state.valor1}
                {'\n'}{'\n'}
                {'Valor em '}{this.state.currency1}{': '}
                {Math.floor(this.state.valor2 * 1000) / 1000}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
  calculateRates = () => {
    this.setState({ valor2: parseFloat(this.state.rate1) / parseFloat(this.state.rate2) * parseFloat(this.state.valor1) });
  }
  getRates = () => {
    axios
      // latest?symbols=USD,GBP
      .get(`https://api.exchangeratesapi.io/latest?symbols=${this.state.currency1},${this.state.currency2}`)
      .then(res => {
        console.debug(res.data);
        this.setState({
          rate1: res.data.rates[this.state.currency1],
          rate2: res.data.rates[this.state.currency2],
          valor1: this.state.valor1
        });
        this.calculateRates();
      })
      .catch(err => {
        console.log(err);
      });
  };
  onValueChange2(value: String){
    this.setState({
      currency2: value
    });
  }
  onValueChange1(value: String){
    this.setState({
      currency1: value
    });
  }
}
