import React from 'react'
import moment from 'moment';
import axios from 'axios';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View, Text } from 'react-native'
 

export default class HistoryScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currency1: 'GBP',
            currency2: 'USD',
            currency3: 'BRL',
        };
    }

    async loadData() {
        const now = moment();
        const todayString = now.format(moment.HTML5_FMT.DATE);
        const weekBeforeString = now.subtract(7, 'days').format(moment.HTML5_FMT.DATE);
        const url = 'https://api.exchangeratesapi.io/history?start_at='+weekBeforeString+'&end_at='+todayString+'&symbols=BRL,GBP,USD';
        axios.get(url)
            .then(res => {
                console.debug(res.data);
                let resultUSD = Object.keys(res.data.rates).map((k,e) => {
                    let _o = res.data.rates[k]
                });
                this.setState({
                    h7usdbrl: resultUSD
                });
                console.log(this.state.h7usdbrl);
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentWillMount() {
        this.loadData();
    }
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
        return (
            <View style={{ height: 100, padding: 20 }}>
                <Text>US Dólar x BRL Real - Últimos 7 dias</Text>
                <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                    <YAxis
                        data={data}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data}
                            contentInset={verticalContentInset}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid />
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={axesSvg}
                        />
                    </View>
                </View>
            </View>
        )
    }

}