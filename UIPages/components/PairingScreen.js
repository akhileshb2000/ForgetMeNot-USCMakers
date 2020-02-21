import React, { Component } from 'react';
import { Button,
    View,
    StyleSheet,
    Text,
    Alert,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardList } from 'react-native-card-list';

const img = require('../assets/keys.png');
const img2 = require('../assets/wallet.png');

export default class PairingSreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: "0",
          textStyle: 'black',
          title: "Car Keys",
          picture: img,
          content: <Text>Keys to the 1996 Toyota Camry</Text>
        }
      ]
    }
  };

  async handlerOnClick() {
    const copyCards = Object.assign([], this.state.cards);
    copyCards.push({
      id: (copyCards.length).toString(),
      textStyle: 'black',
      title: "Wallet",
      picture: img2,
      content: <Text>Kind of important</Text>
    });

    this.setState({
      cards: copyCards,
    })
  }

  static navigationOptions = {
    headerShown: false
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Text style={{fontSize: 25, color: 'white'}}>Pairing Devices</Text>
        </View>

        <View style={{height: 15, backgroundColor: 'transparent',}}></View>

        <View style={styles.buttonBar}>
          <View style={styles.buttonBar2}></View>
          <View style={styles.buttonBar3}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Devices')}>
              <Text style={{color: 'white', textAlign: 'center'}}>Add Home   Device</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBar2}></View>
          <View style={styles.buttonBar3}>
            <TouchableOpacity onPress={this.handlerOnClick.bind(this)}> 
              <Text style={{color: 'white', textAlign: 'center'}}>Add Wallet</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBar2}></View>
        </View>

        <View style={{padding: 0, margin: 0, flex: 1, width:'100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
            <CardList cards={this.state.cards}/>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
	container: {
    flex: 1, 
    paddingTop: 24,
    backgroundColor: 'white',
    padding:0
  },
  navBar: {
    height: 55,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBar: {
    height: 70,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  buttonBar2: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonBar3: {
    flex: 2,
    backgroundColor: 'coral',
    justifyContent: 'center',
    borderRadius: 15,

  }

});