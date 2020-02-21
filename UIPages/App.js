import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, 
  Button, 
  StyleSheet, 
} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './components/HomeScreen';
//import SettingScreen from './components/SettingScreen';
import PairingScreen from './components/PairingScreen';
import PairingStack from './components/PairingStack';
import DeviceScreen from './components/DeviceScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Settingscreen from './components/SettingScreen';
//import PairingSreen from './components/PairingScreen';

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}


const AppNavigator = createMaterialBottomTabNavigator({
  Home: { screen: HomeScreen, 
    navigationOptions: {
      tabBarLabel: 'Home',
      barStyle: { backgroundColor: 'rebeccapurple' },
      tabBarIcon:()=> (
        <Icon name='home' color={'white'} size={24} />
      )
    }
  },
  Pairing: { screen: PairingStack,
    navigationOptions: {
      tabBarLabel: 'Pairing',
      barStyle: { backgroundColor: 'coral' },
      tabBarIcon:()=> (
        <Icon name='bluetooth-searching' color={'white'} size={24} />
      )
    }
  },
  Settings: { screen: Settingscreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      barStyle: { backgroundColor: 'darkslategrey' },
      tabBarIcon:()=> (
        <Icon name='settings' color={'white'} size={24} />
      )
    }
  },
},{
    initialRouteName: "Home",
    activeColor: 'white',
    backBehavior: 'history',
    shifting: true,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});

const AppContainer = createAppContainer(AppNavigator);
