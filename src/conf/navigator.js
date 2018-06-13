'use strict';

import React from 'react';
import { Platform } from 'react-native';
import {
    TabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
// screens
import Home from '../screens/Home';
import Roulette from '../screens/Roulette';

const tabBarOptions = Platform.OS === 'ios' ?
    {
        // iOS tabBarOptions
        showLabel: true
    } : {
        // Android tabBarOptions
        showIcon: true,
        showLabel: true,
        labelStyle: {
            fontSize: 10,
            margin: 0,
            padding: 0,

        },
        style: {
            backgroundColor: '#66baff',
        }
    }

exports.HomeNavigator = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Dances',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        },
    },
    Roulette: {
        screen: Roulette,
        navigationOptions: {
            tabBarLabel: 'Play',
            tabBarIcon: ({ tintColor }) => <Icon name="games" size={35} color={tintColor} />
        },
    }
},
    {
        tabBarOptions,
        tabBarPosition: 'bottom',
    });