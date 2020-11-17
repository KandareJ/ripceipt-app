import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Receipt = ({ receipt }) => {
  return (
    <View style={styles.bg}>
      <Image style={styles.image} resizeMode='stretch' source={{ uri: receipt.source }} />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'green',
    width: width * .75,
    marginHorizontal: width * .125,
    height: height * .70,
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default Receipt;
