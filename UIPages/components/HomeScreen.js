import React, { Component } from 'react';
import { Button,
    View, 
    StyleSheet, 
    Text, 
    Alert,
} from 'react-native';
import { createStackNavigator,
     createAppContainer
 } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={{fontSize: 25, color: 'white'}}>Forget Me Not</Text>
        </View>

        <View style={{height: 15, backgroundColor: 'transparent',}}></View>

        <View style={{height: 35, backgroundColor: 'transparent', flexDirection: 'row'}}>
          <View style={styles.third1}></View>
          <View style={styles.third2}>
            <TouchableOpacity onPress={() => Alert.alert("Sign in with Google")}>
              <Text style={{color: 'white', }}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.third1}></View>
        </View>

        <View style={{height: 40, backgroundColor: 'transparent',}}></View>

        <View style={{height: 75, backgroundColor: 'transparent', flexDirection: 'row'}}>
          <View style={styles.d1}></View>
            <View style={styles.d2}>
              <TouchableOpacity onPress={() => Alert.alert("You're on top of it!")}>
                <Text style={{color: 'rebeccapurple', }}>You have your wallet</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.d1}></View>
        </View>

        <View style={{height: 30, backgroundColor: 'transparent',}}></View>

        <View style={{height: 75, backgroundColor: 'transparent', flexDirection: 'row'}}>
          <View style={styles.d1}></View>
            <View style={styles.d2}>
              <TouchableOpacity onPress={() => Alert.alert("You're on top of it!")}>
                <Text style={{color: 'rebeccapurple', }}>You have your keys</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.d1}></View>
        </View>

        <View style={{height: 30, backgroundColor: 'transparent',}}></View>

        <View style={{height: 75, backgroundColor: 'transparent', flexDirection: 'row'}}>
          <View style={styles.d1}></View>
            <View style={styles.d3}>
              <TouchableOpacity onPress={() => Alert.alert("Go back and get it!")}>
                <Text style={{color: 'white', }}>Forgot your bag!</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.d1}></View>
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
  },
  navBar: {
    height: 55,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  third1: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  third2: {
    flex: 2,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  d1: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  d2: {
    flex: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 10,
  },
  d3: {
    flex: 10,
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 10,
  },

});