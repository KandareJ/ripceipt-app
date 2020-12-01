import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FilterMenu from '../FilterMenu';
import { styles } from './styles';

const SpecialTopbar = ({title, children}) => {
  const [menu, setMenu] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.topSection}/>
      <SafeAreaView style={styles.screenView}>
        <View style={(menu) ? styles.noshade : styles.bar}>
          <View style={styles.sideSpace} />

          <View style={styles.centerSpace}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.sideSpace}>
            <TouchableOpacity onPress={() => {setMenu(!menu)}}>
               <Icon name='filter' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </View>
        { menu && <FilterMenu /> }
        <View style={styles.children}>
          {children}
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomSection} />
    </View>
  );
}

export default SpecialTopbar;
