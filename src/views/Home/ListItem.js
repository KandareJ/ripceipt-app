import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ receipt }) => {
  let date = new Date(receipt.timestamp);
  return (
    <View style={styles.item}>
      <View style={styles.center}>
        <Text style={styles.name}>{receipt.store}</Text>
        <Text>{date.toLocaleDateString('en-US')}</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.price}>${receipt.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
    justifyContent: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: '500'
  },
  name: {
    fontSize: 18,
    fontWeight: '400'
  },
  date: {
    fontSize: 16,
    fontWeight: '300'
  }
})

export default ListItem;
