import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bg}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgb(78,107,52)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});

export default Button;
