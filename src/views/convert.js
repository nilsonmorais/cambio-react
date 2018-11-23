import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Picker } from 'react-native';
import { Text, Button } from 'react-native-elements';

import axios from 'axios';

export default class ConvertScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Conversão',
    title: "Conversão de Moedas",
  }
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text h3>Conversor De Moeda</Text>
        </View>
        <View style={styles.content}>
          <TextInput style={styles.input} onChangeText={valor1 => this.setState({ valor1 })} placeholder=" Insira o valor" />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: 100, height: 50 }} >
              <Picker label="a"
                selectedValue={this.state.currency2}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ currency2: itemValue })
                }
              >
                <Picker.Item label="GBP" value="GBP" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="BRL" value="BRL" />
              </Picker>
            </View>
            <View style={{ width: 100, height: 50 }}>
              <Picker
                selectedValue={this.state.currency1}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ currency1: itemValue })
                }
              >
                <Picker.Item label="GBP" value="GBP" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="BRL" value="BRL" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Button raised
            icon={{ name: 'cached', size: 32 }}
            buttonStyle={{ backgroundColor: '#ff4f00', borderRadius: 10 }}
            textStyle={{ textAlign: 'center' }}
            title="Converter" onPress={() => this.getRates()} />
          <Text h4>
            {'\n'}
            {'Valor em '}{this.state.currency2}{': '}
            {this.state.valor1}
            {'\n'}{'\n'}
            {'Valor em '}{this.state.currency1}{': '}
            {Math.floor(this.state.valor2 * 1000) / 1000}
          </Text>
        </View>
      </View>
    );
  }
  calculateRates = () => {
    this.setState({ valor2: parseFloat(this.state.rate1) / parseFloat(this.state.rate2) * parseFloat(this.state.valor1) })
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    fontSize: 20
  }
});