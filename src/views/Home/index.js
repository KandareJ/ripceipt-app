import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';

import Receipt from './Receipt';

const { height, width } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.fill}>
        <ScrollView horizontal={true} snapToInterval={width} decelerationRate="fast" snapToAlignment="end" style={styles.scroll}>
          {receipts.map((x, i) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <View style={styles.listItem} key={i}>
                  <Receipt receipt={x} />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .5
  },
  fill: {
    height: '100%',
      alignItems: 'center'
  },
  scroll: {
  }
});

const receipts = [
  {
    source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg'
  },
  {
    source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg'
  },
  {
    source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg'
  }
];

export default Home;
