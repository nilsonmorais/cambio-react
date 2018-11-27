import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import NewsScreen from './news';
import NewsDetail from './newsDetail';

const newsStack = createStackNavigator(
    {
        Home: NewsScreen,
        Details: NewsDetail,
    },
    {
        initialRouteName: 'Home',
    }
);

const NewsNavContainer = createAppContainer(newsStack);

export default class newsNav extends React.Component {
    render() {
        return <NewsNavContainer />;
    }
}