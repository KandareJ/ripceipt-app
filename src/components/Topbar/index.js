import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';

const Topbar = ({title, children}) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.topSection}/>
      <SafeAreaView style={styles.screenView}>
        <View style={styles.bar}>
          <View style={styles.centerSpace}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.children}>
          {children}
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomSection} />
    </View>
  );
}

export default Topbar;
