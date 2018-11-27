import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit';
import { CardItem, Card, Content, Container, Text } from 'native-base';

export default class HistoryScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            currency1: 'GBP',
            currency2: 'USD',
            currency3: 'BRL',
        };
    }

    async loadData() {
        const now = moment();
        const todayString = now.format(moment.HTML5_FMT.DATE);
        const weekBeforeString = now.subtract(7, 'days').format(moment.HTML5_FMT.DATE);
        const url = 'https://api.exchangeratesapi.io/history?start_at='+weekBeforeString+'&end_at='+todayString+'&symbols=BRL,GBP&base=USD';
        axios.get(url)
            .then(res => {
                //console.debug(res.data);
                let _data = {
                    labels: [],
                    datasets: [{
                        data: []
                    }]
                };
                Object.keys(res.data.rates).forEach((k,e) => {
                    var _dia = moment(k).format('DD/MM');
                    _data.labels.push(_dia);
                    var _usd = res.data.rates[k].USD;
                    var _brl = res.data.rates[k].BRL;
                    _data.datasets[0].data.push(_brl);
                });
                this.setState({
                    dataChart1: _data,
                    isReady: true
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentWillMount() {
        this.loadData();
    }
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: [20, 45, 28, 80, 99, 43]
            }]
        }
        const screenWidth = Dimensions.get('window').width
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        }
        if (this.state.isReady) {
            return (
                <Container>
                    <Content>
                        <Card>
                            <CardItem>
                                <Text>US Dólar x BRL Real - Última Semana</Text>
                            </CardItem>
                            <CardItem>
                                <LineChart
                                    data={this.state.dataChart1}
                                    width={screenWidth}
                                    height={220}
                                    chartConfig={chartConfig}
                                />
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            )
        } else {
            return <Expo.AppLoading />;
        }
    }

}