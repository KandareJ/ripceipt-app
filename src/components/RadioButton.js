import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RadioButton = ({ active, color }) => {

  const styles = StyleSheet.create({
    outer: {
      height: 20,
      width: 20,
      borderColor: color || 'white',
      borderRadius: 20,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inner: {
      height: 10,
      width: 10,
      backgroundColor: color || 'white',
      borderRadius: 10
    }
  });


  return (
    <View style={styles.outer}>
      { active && <View style={styles.inner} /> }
    </View>
  );
}

export default RadioButton;
