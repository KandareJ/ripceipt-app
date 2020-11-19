import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Receipt from './Receipt';
import Topbar from '../../components/Topbar';

const { height, width } = Dimensions.get('window');

const Home = ({ receipts }) => {
  return (
    <Topbar title="Home">
      <View style={styles.fill}>
        <ScrollView horizontal={true} snapToInterval={width} decelerationRate="fast" snapToAlignment="end" style={styles.scroll}>
          {body(receipts)}
        </ScrollView>
      </View>
    </Topbar>
  );
}

const body = (receipts) => {
  if (receipts.length === 0) {
    return (
      <View style={{justifyContent: 'center'}}>
        <Text>You have no receipts to show</Text>
      </View>
    );
  }

  else {
    return receipts.map((x, i) => {
      return (
        <View style={{justifyContent: 'center'}} key={i}>
          <View style={styles.listItem}>
            <Receipt receipt={x} />
          </View>
        </View>
      );
    });
  }
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

const mapStateToProps = (state) => {
  return {
    receipts: state.receipts
  };
}

export default connect(mapStateToProps)(Home);
