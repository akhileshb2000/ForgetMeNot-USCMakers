import React, { Component } from 'react';
import { Platform, 
  Button, 
  StyleSheet, 
  Text, 
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default class Settingscreen extends Component {
  static navigationOptions = {
    headerShown: false
  }

	render() {
		return (
		<View style={styles.container}>

        <View style={styles.navBar}>
          {/* <TouchableOpacity onPress={() => this.props.navigation.back()}> 
            <Icon name="arrow-back" size={25} color='white'/>
          </TouchableOpacity> */}
          <Text style={styles.pageNameText}>Settings</Text>
        </View>

        <View style={styles.container}>

        </View>

        <View style={styles.settingsBox}>
          <View style={styles.PIButton}>
            <Button 
              title="Personal Information"
              color='darkslategrey'
              touchSoundDisabled='false'
              onPress={() => Alert.alert('Please add your information here')}
            /> 
          </View>

          <View style={styles.notification}>
            <Button 
              title="Notification"
              color='darkslategrey'
              touchSoundDisabled='false'
              onPress={() => Alert.alert('Notifications enabled/disabled')}
            /> 
          </View>

          <View style={styles.geolocation}>
            <Button 
              title="Location"
              color='darkslategrey'
              touchSoundDisabled='false'
              onPress={() => Alert.alert('Location services enabled/disabled')}
            /> 
          </View>

          <View style={styles.about}>
            <Button 
              title="About"
              color='darkslategrey'
              touchSoundDisabled='false'
              onPress={() => Alert.alert('This is the best Makers project :)')}
            /> 
          </View>
        </View>

      </View> 
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingTop: 24,
		backgroundColor: 'darkslategrey'
  },
  navBar: {
    height: 55,
    backgroundColor: 'transparent',
    // paddingHorizontal: 15,
    // flexDirection: 'row',
    // alignItems: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingsBox: {
    backgroundColor: 'white',
    height: 550,
    borderRadius: 10,
    elevation: 5,
  },
  pageName: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageNameText: {
    fontSize: 25,
    color: 'white',
  },
  PIButton: {
    position: 'absolute',
    top: 50,
    right: 108,
    height: 25,
    width: 200,
    borderRadius: 100,
  },
  notification: {
    position: 'absolute',
    top: 125,
    right: 108,
    height: 25,
    width: 200,
    borderRadius: 10,
  },
  geolocation: {
    position: 'absolute',
    top: 200,
    right: 108,
    height: 25,
    width: 200,
    borderRadius: 10,
  },
  about: {
    position: 'absolute',
    top: 275,
    right: 108,
    height: 25,
    width: 200,
    borderRadius: 10,
  }

});
