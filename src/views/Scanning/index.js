import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';

import Topbar from '../../components/Topbar';
import { addReceipt } from '../../actions';

const Scanning = ({ username, addReceipt, navigation }) => {
  console.log(navigation);
  let scanner;

  const read = async (e) => {
    navigation.navigate('Home');
    let receipt = JSON.parse(e.data);
    let temp = await AsyncStorage.getItem(`${username}:RECEIPTS`);
    let receipts = JSON.parse(temp);
    receipts.push({...receipt, timestamp: Date.now()});
    await AsyncStorage.setItem(`${username}:RECEIPTS`, JSON.stringify(receipts));
    addReceipt(receipts);
    navigation.navigate('Home');
  }

  return (
    <Topbar title="Add">
      <View style={styles.bg}>
      <QRCodeScanner onRead={read} ref={(node) => { scanner = node }} reactivateTimeout={10000} reactivate={true}/>
      </View>
    </Topbar>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 22,
    fontWeight: '300'
  }
});

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    view: state.view,
    curFilter: state.filter
  };
}

export default connect(mapStateToProps, { addReceipt })(Scanning);
