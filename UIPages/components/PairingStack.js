import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, 
  Button, 
  StyleSheet, 
} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import PairingScreen from './PairingScreen';
import DeviceScreen from './DeviceScreen';

const PStack = createStackNavigator({
    Pairing: { screen: PairingScreen },
    Devices: { screen: DeviceScreen },
  },{
    initialRouteName: "Pairing",
    backBehavior: 'history',
  });

 const AppContainer = createAppContainer(PStack);

export default class PairingStack extends Component {
	render() {
		return <AppContainer/>;
	}
}
