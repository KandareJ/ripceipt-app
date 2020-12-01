import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Receipt from './Receipt';
import ListItem from './ListItem';
import SpecialTopbar from '../../components/SpecialTopbar';

const { height, width } = Dimensions.get('window');

const Home = ({ receipts, view, filter }) => {
  let filtered = filterReceipts(receipts, filter);

  return (
    <SpecialTopbar title="Home">
      <View style={styles.fill}>
        {body(receipts, view)}
      </View>
    </SpecialTopbar>
  );
}

const body = (receipts, view) => {
  if (receipts.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You have no receipts to show</Text>
      </View>
    );
  }

  else if (view === 'Card') {
    return (
      <ScrollView horizontal={true} snapToInterval={width} decelerationRate="fast" snapToAlignment="end">
        {receipts.map((x, i) => {
          return (
            <View style={{justifyContent: 'center'}} key={i}>
              <View style={styles.listItem}>
                <Receipt receipt={x} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
  else {
    return (
      <ScrollView style={styles.scroll}>
        {receipts.map((x, i) => {
          return (
            <ListItem receipt={x} key={i + x.source} />
          );
        })}
      </ScrollView>
    );
  }
}

const filterReceipts = (receipts, filter) => {
  if (filter === 'DateON') {
    return receipts.sort((a, b) => {
      return a.timestamp > b.timestamp
    });
  }
  else if (filter === 'DateNO') {
    return receipts.sort((a, b) => {
      return a.timestamp < b.timestamp
    });
  }
  else if (filter === 'Store') {
    return receipts.sort((a, b) => {
      return a.store > b.store
    });
  }
  else if (filter === 'AmountHL') {
    return receipts.sort((a, b) => {
      return a.price < b.price
    });
  }
  else if (filter === 'AmountLH') {
    return receipts.sort((a, b) => {
      return a.price > b.price
    });
  }
  else return receipts;
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
    width: '100%'
  }
});

const mapStateToProps = (state) => {
  return {
    receipts: state.receipts,
    view: state.view,
    filter: state.filter
  };
}

export default connect(mapStateToProps)(Home);
