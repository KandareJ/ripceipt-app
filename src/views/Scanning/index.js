import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import Topbar from '../../components/Topbar';

const Scanning = () => {
  return (
    <Topbar title="Add">
      <View style={styles.bg}>
        <Text style={styles.text}>Scanning...</Text>
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

export default Scanning;
